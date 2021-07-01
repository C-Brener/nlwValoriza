import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController} from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController(); 

router.post("/users", createUserController.handle);

router.post("/tags", ensureAdmin , createTagController.handle);
//passando o middleware de verificação de autorização dentro da propria rota do tags

router.post("/login", authenticateUserController.handle);

export { router };
