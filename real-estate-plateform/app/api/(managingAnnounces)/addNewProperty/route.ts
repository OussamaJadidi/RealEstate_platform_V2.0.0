import { PrismaClient } from "@prisma/client";


export const POST = async (request: Request)=>{
    try{
        const body = await request.json();
        const {
            address,
            country,
            city,
            latAndLng,
            rentOrSell,
            title,
            description,
            bathRooms,
            bedRooms,
            price,
            propertyType,
            furniture,
            surface,
            centralizedClimat,
            concierge,
            parking,
            storage,
            pool,
            downtown,
            name,
            email,
            phoneNumber,
            facebook,
            instagram,
            twitter,
            images,
            ownerId,
            rentPeriod
        } = body;
        const prisma = new PrismaClient();
        if(rentOrSell == "sell"){
        const announceForSell = await prisma.propertyToSell.create({
            data: {
                country,
                city,
                address,
                latAndLng: JSON.stringify(latAndLng),
               
                
                title,
                description,
                propertyType,
                price,
                surface,
                
                bedsNumber: bedRooms,
                bathsNumber: bathRooms,
                furniture,
                Hashtags: JSON.stringify({centralizedClimat:centralizedClimat,parking:parking,storage:storage,concierge:concierge,pool:pool,downtown:downtown}),
                

                ownerId,
                ownerUsedName: name,
                ownerEmail: email,
                ownerPhone: phoneNumber,

                ownerFacebookContact: facebook,
                ownerInstagramContact: instagram,
                ownerTwitterContact: twitter,
                
                images:images,
            }     
        })
        return new Response(JSON.stringify(announceForSell),{status:200});

        }else{
            const announceForRent = await prisma.propertyToRent.create({
                data: {
                    country,
                    city,
                    address,
                    latAndLng:JSON.stringify(latAndLng),
                   
                    
                    title,
                    description,
                    propertyType,
                    price,
                    rentalPeriod: rentPeriod,
                    surface,
                    
                    bedsNumber: bedRooms,
                    bathsNumber: bathRooms,
                    furniture,
                    Hashtags: JSON.stringify({centralizedClimat:centralizedClimat,parking:parking,storage:storage,concierge:concierge,pool:pool,downtown:downtown}),
                    
    
                    ownerId,
                    ownerUsedName: name,
                    ownerEmail: email,
                    ownerPhone: phoneNumber,
    
                    ownerFacebookContact: facebook,
                    ownerInstagramContact: instagram,
                    ownerTwitterContact: twitter,
                    
                    images:images,
                }   
            })
            return new Response(JSON.stringify(announceForRent),{status:200});
        }
  } catch (error) {
    return new Response("something went wrong", { status: 500, statusText: "Internal Server Error"  });
  }

}