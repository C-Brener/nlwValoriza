import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"




class ListUserSendComplimentsService{

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"], // fazendo uma relação com todas as informações das colunas descritas
        })

        return compliments
    }
}


export { ListUserSendComplimentsService }