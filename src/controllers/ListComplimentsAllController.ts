import { Request, Response } from "express";
import { ListComplimentsAllService } from "../services/ListComplimentsAllService";

class ListComplimentsAllController{
    async handle(request: Request, response: Response){
        const listComplimentsAllService = new ListComplimentsAllService;

        const compliments = await listComplimentsAllService.execute();

        return response.json(compliments);
    }
}

export { ListComplimentsAllController }