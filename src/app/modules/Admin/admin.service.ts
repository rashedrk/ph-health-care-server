import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

const getAllAdminFromDB = async (query: any) => {
    const andConditions: Prisma.AdminWhereInput[] = [];
    const adminSearchableFields = ['name', 'email'];

    if (query.searchTerm) {
        andConditions.push(
            {
                // OR: [
                //     {
                //         name: {
                //             contains: query.searchTerm,
                //             mode: "insensitive"
                //         }
                //     },
                //     {
                //         email: {
                //             contains: query.searchTerm,
                //             mode: "insensitive"
                //         }
                //     }
                // ]     
                OR: adminSearchableFields.map(filed => ({
                    [filed]: {
                        contains: query.searchTerm,
                        mode: "insensitive"
                    }
                }))
            }
        )
    }

    const whereConditions: Prisma.AdminWhereInput = { AND: andConditions }

    const result = await prisma.admin.findMany({
        where: whereConditions
    });
    return result;
}

export const adminServices = {
    getAllAdminFromDB,
}