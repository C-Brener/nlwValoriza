import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController} from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
 
router.post("/users", createUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin,createTagController.handle);
//passando o middleware de verificação de autorização dentro da propria rota do tags

router.post("/login", authenticateUserController.handle);

//passando a rota do nosso compliment
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);

export { router };
