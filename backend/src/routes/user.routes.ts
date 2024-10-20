import { Router } from 'express';
import userController from 'controllers/user.controller.js';

const router: Router = Router();

router.get("/user/:id", userController.getUsers);
router.post("/user", userController.createUser);
router.delete(`/user/:id`, userController.deleteUser)

export default router;