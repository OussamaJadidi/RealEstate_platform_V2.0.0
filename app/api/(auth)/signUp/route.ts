import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";


export const POST = async (req: Request) => {
  const body = await req.json()
    try {
    const {
      email,
      password,
      name
    } = body;
    console.log("kayn : ",{email,password,name})
    if (!email || !password) {
      throw new Error("Missing fields");
    }
    const prisma = new PrismaClient();
    const exist = await prisma.user.findUnique({
      where: {
        email: email
      },
    });
    if (exist) {
      throw new Error("User already Exist");
    }
    const cryptedPassword = await hash(password,10)
    const user = await prisma.user.create({
      data: {
        name: name, 
        email: email,
        password: cryptedPassword       
      },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    const errorMessage = error.message;
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 400,
    });

  }
}
