import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/modules/User/user.route";

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to PH Health Care Application")
})


app.use('/api/v1/users', userRoutes)

export default app;