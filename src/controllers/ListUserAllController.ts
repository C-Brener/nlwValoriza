import { Request, Response } from "express";
import { ListUserAllService } from "../services/ListUserAllService";

class ListUserAllController{
    async handle(request: Request, response: Response){
        const listUserAllService = new ListUserAllService;

        const user = await listUserAllService.execute();

        return response.json(user);
    }
}

export { ListUserAllController }