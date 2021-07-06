import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListComplimentsAllService{
    
    async execute(){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const tags = await complimentsRepositories.find();

        return tags;
    }
}

export { ListComplimentsAllService }