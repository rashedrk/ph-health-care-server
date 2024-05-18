import { Request, Response } from "express"
import { userServices } from "./user.service"

const createAdmin = async (req: Request, res: Response) => {
   try {
    const result = await userServices.createAdminIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Admin created successfully",
        data: result
    })
   } catch (error) {
    res.status(500).json({
        success: true,
        message: error?.name || "something went wrong",
        error
    })
   }
}

export const userControllers = {
    createAdmin,
}