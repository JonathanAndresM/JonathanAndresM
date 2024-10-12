import { Schema,model } from "mongoose";

let collection = "animes";
let schema = new Schema({
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    director: { type: String, required: true },
    capitulos: { type: Number, required: true },
    enEmision: { type: Boolean, required: true },
    peliculas: { type: Boolean, required: true },
    totalPeliculas: { type: Number, required: true },
    protagonista: { type: String, required: true },
    genero: { type: String, required: true },
    inicioTransmicion: { type: Number, required: true },
    rating: { type: Number, required: true },
    studio: { type: String, required: true },
    adaptadoDe: { type: String, required: true },
    popularidad: { type: Number, required: true },
},{
    timestamps:true
})

let Anime = model(collection,schema)
export default Anime