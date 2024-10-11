import { Schema,model } from "mongoose";

let collection = "mangas"
let schema = new Schema({
    name:{type:String,required:true},
    tomos:{type:Number,required:true},
    author:{type:String,required:true},
    authorLive:{type:Boolean,required:true},
    authorAge:{type:Number,required:true},
    finish:{type:Boolean,required:true},
    ageCreate:{type:Number,required:true},
    genero:{type:String,required:true},
    sequel:{type:Boolean,required:true},
    nameSequel:{type:String,required:true},
},{
    timestamps:true
})

let Manga = model(collection,schema)
export default Manga