import { EntityRepository, Repository} from "typeorm";
import { users } from "../../entities/users";

@EntityRepository(users)
class UsersRepositories extends Repository<users>{
    
}

export { UsersRepositories}