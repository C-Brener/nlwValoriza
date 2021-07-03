import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // 1- Recebendo o token
    const authToken = request.headers.authorization;
    
    // 2- Validar se o token estiver preenchido, ou seja, o token se torna obrigatório
    if(!authToken){
        return response.status(401).end(); // passando o status de 401 que define a falta de autorização para acessar o ambiente 
    }

    const token = authToken.split(" ");

    // 3- Verificar se o token é valido 
    try {
        const { sub } = verify(token[1] ,"eb4ae55f45adaac4c512fdf948f03be3") as IPayload;

    // 4- Recuperar Infos do usuário 
        request.user_id = sub;

        return next();

    }catch(err){
        return response.status(401).end();
    };


   
}