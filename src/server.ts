import "reflect-metadata";
import express from "express";
import "./database"; // importando o arquivo da pasta database 

//yarn add @types/express -D - serve para importar as sub-bibliotexcas do express
const app = express();

 //inicializando servidor
 //http://localhost:3000
app.listen(3000, () => console.log("Server Is Running Dev Node"))