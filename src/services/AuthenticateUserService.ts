import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        
         //Verificar se email existe
        const user = await usersRepositories.findOne({
            email 
        });

        if(!user){
            throw new Error("Email or Password Incorrect")
        }
         //Se não existir retornara um erro
         //Se existir, verificar se senha está correta 

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("E-mail or Password Incorrect!")
        }
        
         //Estando correta gerará um token JTW

         const token = sign(
            {
             email: user.email
            },
            "eb4ae55f45adaac4c512fdf948f03be3",
            {
             subject: user.id,
             expiresIn: "1d"
            }
        );

        return token;
    }
}

export {AuthenticateUserService}