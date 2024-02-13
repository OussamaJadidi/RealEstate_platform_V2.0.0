import { PrismaClient } from "@prisma/client";

export const GET = async (request: Request,{params}: any) => {
  try {
    const {propertyId,rentOrSell} = params

    const prisma = new PrismaClient();
    if (rentOrSell == "sell") {
      const propertyData = await prisma.propertyToSell.findFirst({
        where: {
          id: propertyId,
        },
      });
      if (!propertyData) {
        throw new Error("Property announce not found");
      }
      return new Response(JSON.stringify(propertyData), {
        status: 200,
      });
    } else {
      const propertyData = await prisma.propertyToRent.findFirst({
        where: {
          id: propertyId,
        },
      });
      if (!propertyData) {
        throw new Error("Property announce not found");
      }
      return new Response(JSON.stringify(propertyData), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response("something went wrong", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
