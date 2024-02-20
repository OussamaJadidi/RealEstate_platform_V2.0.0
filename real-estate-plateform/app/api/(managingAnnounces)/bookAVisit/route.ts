import { PrismaClient } from "@prisma/client";

export const PATCH = async (req: Request) => {
  try {
    const { bookingVisitData, propertyId, rentOrSell } = await req.json();
    const prisma = new PrismaClient();
    // First find the data of all bookedVisits for this property
    // if (rentOrSell === "rent") {
      const announceData = await prisma.propertyToRent.findFirst({
        where: {
          id: propertyId,
        },
      });
      console.log("aaaaaaaa",announceData?.bookingsInfo)
      // Second Add this new booking visit to the property data
      if (announceData?.bookingsInfo == null) {
        var updatedbookingsInfo: string[] = [JSON.stringify(bookingVisitData)];
      } else {
        var updatedbookingsInfo: string[] = JSON.parse(
          announceData?.bookingsInfo as string
        );
        updatedbookingsInfo.push(bookingVisitData);
      }
    // } else {
    //   const announceData = await prisma.propertyToSell.findFirst({
    //     where: {
    //       id: propertyId,
    //     },
    //   });
      // Second Add this new booking visit to the property data
    //   var BookedVisitArray = JSON.parse(announceData?.bookingsInfo as string);
    //   if (announceData?.bookingsInfo == null) {
    //     var updatedbookingsInfo: string[] = [JSON.stringify(bookingVisitData)];
    //   } else {
    //     var updatedbookingsInfo: string[] = JSON.parse(
    //       announceData?.bookingsInfo as string
    //     );
    //     updatedbookingsInfo.push(bookingVisitData);
    //   }
    // }

    // if (rentOrSell === "rent") {
      var bookingTheVisit = await prisma.propertyToRent.update({
        where: {
          id: propertyId,
        },
        data: {
          bookingsInfo: JSON.stringify(updatedbookingsInfo),
        },
      });
    // } else {
    //   var bookingTheVisit: any = await prisma.propertyToSell.update({
    //     where: {
    //       id: propertyId,
    //     },
    //     data: {
    //       bookingsInfo: JSON.stringify(updatedbookingsInfo),
    //     },
    //   });
    // }

    await prisma.$disconnect();

    return new Response(JSON.stringify(bookingTheVisit), { status: 200 });
  } catch (error) {
    return new Response("something went wrong", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
