import { Router } from "express";
import { allUsers, usersByRole } from "../controllers/users/read.js";

const router = Router()

router.get("/all", allUsers)
router.get('/role/:rol',usersByRole)

export default router