import Koa from "koa"
import cors from "@koa/cors"
import logger from "koa-logger"
import bodyparser from "koa-bodyparser"
import jwt from "koa-jwt"
import { jwtSecret } from "./config/auth"
import authRoutes from "./routes/auth"
import "./db"
const app = new Koa()
app.use(cors())
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
)
// app.use(bodyparser())
app.use(logger())
app.use(authRoutes.routes()).use(authRoutes.allowedMethods())
// 自定义401错误
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status == 401) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        error: "未登录 token失效"
      }
    } else {
      ctx.throw(err)
    }
  })
})
// token验证 header未携带token 直接返回401 Authentication Error
app.use(
  jwt({ secret: jwtSecret }).unless({
    // 白名单
    path: ["/api/auth/login", "/api/auth/register"]
  })
)
// 端口号
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server listening on ${port}`)
})
app.on("error", (err) => console.error("server error", err))
