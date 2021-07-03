import {Request, Response, NextFunction, response} from "express"



export function ensureAdmin(request: Request, response: Response, next: NextFunction){

    const { user_id } = request;
    console.log(user_id);
    // Verificando se o usuario é admin ou não 

    const admin = true;

    if(admin){
        return next();
    }
    
    return response.status(401).json({
        error: "User is not Admin",
    });
}
