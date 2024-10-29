import User from "../../models/User.js";
import "../../models/Auto.js"

let allUsers = async (req, res) => {
    try {
        let {name,role} = req.query
        console.log(name);
        console.log(role);
        let query = {}
         if (name) {
            query.name = {$regex: '^'+name, $options: 'i'}
         }
         /*$regex
         $eq
         $ne // distindo a ej john
         $in: [1,2,3]
         $nin: [1,2,3]
         $gte: new Date('2023-01-01'), $lte: new Date('2023-12-31')
         $exists: true
         $size: 4*/
        
        let all = await User.find(query).populate('auto','marca modelo').exec();
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let usersByRole = async (req, res) => {
    try {
        console.log(req.params);

        let roleQuery = req.params.rol
        let all = await User.find({ role: roleQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let usersById = async (req, res) => {
    try {
        console.log(req.params);

        let roleQuery = req.params.id
        let all = await User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { allUsers, usersByRole, usersById }