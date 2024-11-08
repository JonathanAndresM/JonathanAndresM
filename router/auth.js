import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";

const router = Router()

router.post("/signIn", accountNotExist, isValidadPassword, signIn)

export default router