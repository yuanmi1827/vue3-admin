import Router from "@koa/router"
import {
  registerController,
  LoginModel,
  loginController
} from "../controller/auth"
import { UserAttributes } from "../db/models/User.model"
const router = new Router({
  prefix: "/api/auth"
})

// 注册
router.post("/register", async (ctx) => {
  ctx.body = await registerController(ctx.request.body as UserAttributes)
})
// 登陆
router.post("/login", async (ctx) => {
  ctx.body = await loginController(ctx.request.body as LoginModel)
})

router.get("/test", async (ctx) => {
  ctx.body = "hello, is just a test"
})
export default router
