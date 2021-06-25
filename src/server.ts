import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next:NextFunction) => {
/**
 * Funcionalidades dos parâmetros:
 * err:Error -> Verifica se existe algum erro e caso exista ele retornará preenchido
 * request:Request -> Entrada de dados
 * response:Response -> Saida de dados
 * next:NextFunction -> O next aponta qual rota deve tormar caso o erro tenha algum tipo de trativa mais usado com autenticação  
 */
    if(err instanceof Error){ // Verificando se o erro foi causado pelp email já existente 
        return response.status(400).json({
            error:err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Error not identified"
    })
})

app.listen(3000, () => console.log("Server is running NodeJsDev"));
