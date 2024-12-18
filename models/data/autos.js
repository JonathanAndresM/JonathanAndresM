import "dotenv/config.js"
import "../../config/db.js"
import Auto from "../Auto.js"

let autos = [
    {
      marca: "Toyota",
      modelo: "Corolla"
    },
    {
      marca: "Honda",
      modelo: "Civic"
    },
    {
      marca: "Ford",
      modelo: "Mustang"
    },
    {
      marca: "Chevrolet",
      modelo: "Camaro"
    },
    {
      marca: "BMW",
      modelo: "3 Series"
    },
    {
      marca: "Mercedes-Benz",
      modelo: "C-Class"
    },
    {
      marca: "Audi",
      modelo: "A4"
    },
    {
      marca: "Volkswagen",
      modelo: "Golf"
    },
    {
      marca: "Nissan",
      modelo: "Altima"
    },
    {
      marca: "Hyundai",
      modelo: "Elantra"
    }
  ];

  Auto.insertMany(autos)