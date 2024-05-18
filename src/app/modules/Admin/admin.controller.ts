import { Request, Response } from "express";
import { adminServices } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
    try {
        const result = await adminServices.getAllAdminFromDB(req.query);
        res.status(200).json({
            success: true,
            message: "All Admins successfully retrieved",
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

export const adminControllers = {
    getAllAdmin
}