import { PrismaClient } from "@prisma/client";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  //authOptions
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Sign in",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        Email: { label: "email", type: "text", placeholder: "Email" },
        Password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.Email || !credentials?.Password) {
          throw new Error("A filed is missed");
        }

        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.Email,
          },
        });

        if (!user) throw new Error("User not found");
        const isPasswordCorrect = await compare(
          credentials.Password,
          user.password
        );
        if (!isPasswordCorrect) {
          throw new Error("Wrong infromations");
        }
        const disconnect = await prisma.$disconnect();
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          bookedVisits: user.bookedVisits,
          FavoritesPropertiesId: user.FavoritesPropertiesId,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({profile,account}){
      if(account?.provider =="google"){
        try{
          const p = profile as unknown as any;
            const prisma = new PrismaClient();
            //check if a user already exist
            const userAlreadyExist = await prisma.user.findUnique({
              where: {
                email: p.email ,
              },
            });
            //if not create a new ueser and save it into the database
            if(!userAlreadyExist){
               const creatUser =  await prisma.user.create({
                data:{
                  email: p.email,
                  name: p.name,
                  password: "any"
                }
                });
            }
            return true
          } catch (error) {
            console.log("Error in google providers");
            return false
          }
        }else{
          return true
        }
      },
      async jwt({ token, user,account }) {
      if (user) {
        let u = user as unknown as any;
        if(account?.provider === "google"){
  
          const prisma = new PrismaClient();
          //check if a user already exist
          const userAlreadyExist = await prisma.user.findUnique({
            where: {
              email: u.email ,
            },
          });
          if(userAlreadyExist){
            u = userAlreadyExist;
          }
        }

        return {
          ...token,
          id: u.id,
          bookedVisits: u.bookedVisits,
          FavoritesPropertiesId: u.FavoritesPropertiesId,
        };
      }
      return token;
    },
    async session({ session, token}) {
      console.log("tokens a sat : ",token)
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          bookedVisits: token.bookedVisits,
          FavoritesPropertiesId: token.FavoritesPropertiesId,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
