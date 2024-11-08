import { Router } from "express";
import { allUsers, usersById, usersByRole } from "../controllers/users/read.js";
import { register, createMany } from "../controllers/users/register.js";
import { deleteFindById, deleteMany, deleteOne } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreate from "../schemas/users/create.js"
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const router = Router()

router.get("/all", allUsers)
router.get('/role/:rol', usersByRole)
router.get('/id/:id', usersById)
router.post("/register", validator(schemaUsersCreate),accountExists,createHash, register)
router.post("/createMany", createMany)

router.delete("/deleteOne", deleteOne)
router.delete("/deleteMany", deleteMany)
router.delete("/deleteFindById", deleteFindById)

export default router