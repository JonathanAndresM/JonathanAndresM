import "dotenv/config.js"
import "../../config/db.js"
import Manga from "../Manga.js"

let mangas = [
    {
        name: "Naruto",
        tomos: 72,
        author: "Masashi Kishimoto",
        authorLive: true,
        authorAge: 49,
        finish: true,
        ageCreate: 25,
        genero: "Shonen",
        sequel: true,
        nameSequel: "Boruto: Naruto Next Generations"
    },
    {
        name: "One Piece",
        tomos: 105,
        author: "Eiichiro Oda",
        authorLive: true,
        authorAge: 49,
        finish: false,
        ageCreate: 22,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    },
    {
        name: "Dragon Ball",
        tomos: 42,
        author: "Akira Toriyama",
        authorLive: true,
        authorAge: 68,
        finish: true,
        ageCreate: 31,
        genero: "Shonen",
        sequel: true,
        nameSequel: "Dragon Ball Super"
    },
    {
        name: "Attack on Titan",
        tomos: 34,
        author: "Hajime Isayama",
        authorLive: true,
        authorAge: 37,
        finish: true,
        ageCreate: 23,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    },
    {
        name: "Fullmetal Alchemist",
        tomos: 27,
        author: "Hiromu Arakawa",
        authorLive: true,
        authorAge: 50,
        finish: true,
        ageCreate: 28,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    },
    {
        name: "Bleach",
        tomos: 74,
        author: "Tite Kubo",
        authorLive: true,
        authorAge: 46,
        finish: true,
        ageCreate: 23,
        genero: "Shonen",
        sequel: true,
        nameSequel: "Bleach: Thousand-Year Blood War"
    },
    {
        name: "Demon Slayer",
        tomos: 23,
        author: "Koyoharu Gotouge",
        authorLive: true,
        authorAge: 34,
        finish: true,
        ageCreate: 27,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    },
    {
        name: "My Hero Academia",
        tomos: 37,
        author: "Kohei Horikoshi",
        authorLive: true,
        authorAge: 37,
        finish: false,
        ageCreate: 28,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    },
    {
        name: "Tokyo Ghoul",
        tomos: 14,
        author: "Sui Ishida",
        authorLive: true,
        authorAge: 37,
        finish: true,
        ageCreate: 24,
        genero: "Seinen",
        sequel: true,
        nameSequel: "Tokyo Ghoul:re"
    },
    {
        name: "Death Note",
        tomos: 12,
        author: "Tsugumi Ohba",
        authorLive: true,
        authorAge: 45,
        finish: true,
        ageCreate: 32,
        genero: "Shonen",
        sequel: false,
        nameSequel: "none"
    }
];


 Manga.insertMany(mangas)