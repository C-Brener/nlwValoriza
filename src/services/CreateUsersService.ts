import { UsersRepositories } from "../database/repositories/UsersRepositories"

interface IUsersRequest{
    name: string;
    email: string;
    admin?: boolean;
}
class CreateUsersService {
    
    async execute({name, email, admin} : IUsersRequest){
        const usersRepositories = new UsersRepositories();
        
        if(!email){
            throw new Error("Incorrect e-mail")
        }

        const usersAlreayExists = await usersRepositories.findOne({
            email
        });
        
        if(usersAlreayExists){
            throw new Error("User already exists");
        }

        const user = usersRepositories.create({
            name,
            email,
            admin
        })

        await usersRepositories.save(user);

        return user;
    }
}

export { CreateUsersService }