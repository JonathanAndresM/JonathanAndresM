import { Router } from "express";
import userRouter from "./users.js"
import auth from "./auth.js"

const router = Router()

router.use('/users',userRouter)
router.use("/auth", auth)

export default router