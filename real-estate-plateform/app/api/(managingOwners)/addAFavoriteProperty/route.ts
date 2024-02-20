import { PrismaClient } from "@prisma/client";

export const PUT = async (req: Request, { params }: any) => {
    try {
        const { ownerId, propertyId } = await req.json();
        const prisma = new PrismaClient();

        // Fetch the user
        const user = await prisma.user.findUnique({
            where: {
                id: ownerId,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }
        // // Parse the JSON array and push the new propertyId
        if(user.FavoritesPropertiesId == null){
            var favoritePropertiesJSON: string[]= [propertyId.toString()] 
        }else{
            var favoritePropertiesJSON: string[] = JSON.parse(user.FavoritesPropertiesId as string) ;
            favoritePropertiesJSON.push(propertyId);
        }

        // Update the user with the modified array
        const updatedUserData = await prisma.user.update({
            where: {
                id: ownerId,
            },
            data: {
                FavoritesPropertiesId: JSON.stringify(favoritePropertiesJSON),
            },
        });

        await prisma.$disconnect();

        return new Response(JSON.stringify(updatedUserData),{status: 200});
    } catch (error) {
        return new Response("something went wrong", {
            status: 500,
            statusText: "Internal Server Error",
          });
    }
};
