const { Router } = require("express")
const { createUser, login } = require("../controllers/user.controller.js")
const isAuth = require("../middleware/auth.js")

const userRouter = Router()

userRouter.post("/signup", createUser)
userRouter.post("/login", login)


module.exports = userRouter