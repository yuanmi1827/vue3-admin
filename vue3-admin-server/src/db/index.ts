import sequelize from "./seq"
;(async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
})()
;(async () => {
  // model配置修改后 执行sync进行更新同步
  await sequelize.sync({ alter: true })
  console.log("sync ok")
})()
