import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

const getAllAdminFromDB = async (query: any) => {
    const result = await prisma.admin.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query.searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    email: {
                        contains: query.searchTerm,
                        mode: "insensitive"
                    }
                }
            ]
            
        }
    });
    return result;
}

export const adminServices = {
    getAllAdminFromDB,
}