import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.post('/createAdmin', userControllers.createAdmin)

export const userRoutes  = router