import { UserAttributes } from "../db/models/User.model"
import { createUser, getUserInfo } from "../services/auth"
import { SuccessResponse, ErrorResponse } from "../utils/Response"
import errorInfo from "../constants/errorInfo"
import { createHmac } from "../utils/createHmac"
import { createToken } from "../utils/token"
const { registerUserNameExistInfo, registerFailInfo, loginFailInfo } = errorInfo
/**
 * 注册
 * @param params
 * @returns
 */
export const registerController = async (params: UserAttributes) => {
  const { username, password } = params
  const userInfo = await getUserInfo({ username })
  if (userInfo) {
    const { code, message } = registerUserNameExistInfo
    return new ErrorResponse(code, message)
  }
  // 用户不存在
  try {
    await createUser({
      ...params,
      password: createHmac(password)
    })
    return new SuccessResponse({})
  } catch (e) {
    // 注册失败
    const { code, message } = registerFailInfo
    return new ErrorResponse(code, message)
  }
}

export interface LoginModel {
  username: string
  password: string
}

export const loginController = async (params: LoginModel) => {
  const { username, password } = params
  // 根据用户名和密码 获取用户信息
  const userInfo = await getUserInfo({ username, password })
  if (userInfo) {
    const { id, username } = userInfo
    const token = createToken({ id, username })
    return new SuccessResponse({ token })
  }
  const { code, message } = loginFailInfo
  return new ErrorResponse(code, message)
}
