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
            images
        } = body;
        const prisma = new PrismaClient();
        // if(rentOrSell == "sell"){
        const announceForSell = await prisma.propertyToSell.create({
            data: {
                country:"country",
                city:"city",
                address:"adrress",
                latAndLng:JSON.stringify([22,5]),
               
                
                title:'title',
                description:"des",
                propertyType:'aron now',
                price: 100,
                surface: 200,
                
                bedsNumber: "3",
                bathsNumber: "3",
                furniture: "unf",
                Hashtags: JSON.stringify({centralizedClimat:true,parking:false,storage:true,concierge:false,pool:true,downtown:false}),
                

                ownerId: "hahido",
                ownerUsedName: "name",
                ownerEmail: "email",
                ownerPhone: "phoneNumber",

                ownerFacebookContact: "facebook",
                ownerInstagramContact: "instagram",
                ownerTwitterContact: "twitter",
                
                images:JSON.stringify(images),
            }   
        })
        return new Response(JSON.stringify(announceForSell),{status:200});

        // }else{
        //     const announceForRent = await prisma.propertyToSell.create({
        //         data: {
        //             country,
        //             city,
        //             address,
        //             latAndLng,
                   
                    
        //             title,
        //             description,
        //             propertyType,
        //             price,
        //             surface,
                    
        //             bedsNumber: bedRooms,
        //             bathsNumber: bathRooms,
        //             furniture,
        //             Hashtags: JSON.stringify({centralizedClimat:centralizedClimat,parking:parking,storage:storage,concierge:concierge,pool:pool,downtown:downtown}),
                    
    
        //             ownerId: "sessi",
        //             ownerUsedName: name,
        //             ownerEmail: email,
        //             ownerPhone: phoneNumber,
    
        //             ownerFacebookContact: facebook,
        //             ownerInstagramContact: instagram,
        //             ownerTwitterContact: twitter,
                    
        //             images,
        //         }   
        //     })
        //     return new Response(JSON.stringify(announceForRent),{status:200});
        // }
  } catch (error) {
    return new Response("something went wrong", { status: 400 });
  }

}