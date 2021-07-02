import {Request, Response, NextFunction, response} from "express"



export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    // Verificando se o usuario é admin ou não 

    const admin = true;

    if(admin){
        return next();
    }
    
    return response.status(401).json({
        error: "User is not Admin",
    });
}
