import {Request, Response} from "express"
import { CreateUsersService } from "../services/CreateUsersService"

class CreateUsersController{

    async handle(request: Request, response: Response){
        const { name, email, admin} = request.body;
        const createUsersService = new CreateUsersService();

        const user = await createUsersService.execute({name, email, admin});

        return response.json(user);
    }
}

export { CreateUsersController}