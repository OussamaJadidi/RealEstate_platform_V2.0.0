import { PrismaClient } from "@prisma/client"


export const GET = async (request:Request,{params}: any)=>{
    try{
        const {ownerId}= params
        const prisma = new PrismaClient()
        const ownerData = prisma.user.findUnique({
            where:{
                id: ownerId
            }
        })
        if(!ownerData){
            throw new Error("User not found")
        }
        return new Response(JSON.stringify(ownerData),{status: 200})
    }catch (error) {
        return new Response("something went wrong", {
          status: 500,
          statusText: "Internal Server Error",
        });
    }
}