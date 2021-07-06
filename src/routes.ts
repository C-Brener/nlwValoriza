import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController} from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListComplimentsAllController } from "./controllers/ListComplimentsAllController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserAllController } from "./controllers/ListUserAllController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController(); 
const listComplimentsAllController = new ListComplimentsAllController();
const listUserAllController = new ListUserAllController();

router.post("/users", createUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin,createTagController.handle);
//passando o middleware de verificação de autorização dentro da propria rota do tags

router.post("/login", authenticateUserController.handle);

//passando a rota do nosso compliment
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated , listUserSendComplimentsController.handle); // recuperando elogios enviados
router.get("/users/compliments/receive", ensureAuthenticated , listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle); // é possivel ter duas rotas com o mesmo nome caso elas sejam de parâmetros diferente
router.get("/compliments", ensureAuthenticated, listComplimentsAllController.handle);
router.get("/user", ensureAdmin, listUserAllController.handle);

export { router };
