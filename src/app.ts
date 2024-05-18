import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/modules/User/user.route";
import cors from "cors"
import { adminRoutes } from "./app/modules/Admin/admin.route";

const app: Application = express();

app.use(cors());

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to PH Health Care Application")
})


app.use('/api/v1/users', userRoutes)
app.use('/api/v1/admin', adminRoutes)

export default app;