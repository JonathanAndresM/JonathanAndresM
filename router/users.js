import { Router } from "express";
import { allUsers, usersById, usersByRole } from "../controllers/users/read.js";
import { create, createMany } from "../controllers/users/create.js";
import { deleteFindById, deleteMany, deleteOne } from "../controllers/users/delete.js";


const router = Router()

router.get("/all", allUsers)
router.get('/role/:rol', usersByRole)
router.get('/id/:id', usersById)
router.post("/create", create)
router.post("/createMany", createMany)

router.delete("/deleteOne", deleteOne)
router.delete("/deleteMany", deleteMany)
router.delete("/deleteFindById", deleteFindById)

export default router