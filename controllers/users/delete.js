import { response } from "express"
import User from "../../models/User.js"

let deleteOne = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error)
    }
}


let deleteMany = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteMany({
            role: req.body.role
        })
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error)
    }
}

let deleteFindById = async (req, res, next) => {
    try {
        let deleteUser = await User.findByIdAndDelete(req.params._id)
        if (deleteUser) {
            return res.status(200).json({
                response: deleteUser
            })
        }
    } catch (error) {
        next(error)
    }
}

export { deleteOne, deleteMany, deleteFindById }