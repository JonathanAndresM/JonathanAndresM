import { Router } from "express";
import { allUsers, usersById, usersByRole } from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";
const router = Router()

router.get("/all", allUsers)
router.get('/role/:rol', usersByRole)
router.get('/id/:id', usersById)
router.post("/create",create)

export default router