import { Schema, model } from "mongoose";

let collection = "users"
let schema = new Schema({
    //_id: { type: new Schema.Types.ObjectId, require: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    auto: { type: Schema.Types.ObjectId, ref: 'autos', required: true },
    online: { type: Boolean }
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User