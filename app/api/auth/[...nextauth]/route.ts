import { PrismaClient } from "@prisma/client";
import NextAuth ,{type NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import {compare} from "bcryptjs"
import { JWT } from "next-auth/jwt";
import toast from "react-hot-toast";

interface ExtendedJWT extends JWT {
  id?: number;
  bookedVisits?: any; // Replace 'any' with the actual type
  FavoritesPropertiesId?: any; // Replace 'any' with the actual type
}
interface User {
  name: string;
  email: string;
  // other properties...
}

export const authOptions: NextAuthOptions ={
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
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        Email: { label: "email", type: "text", placeholder: "Email" },
        Password: { label: "password", type: "password" },
      },
      async authorize(credentials)  {
        if (!credentials?.Email || !credentials?.Password) {
          throw new Error("A filed is missed")
        }

        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
          where: {
              email: credentials.Email,
          },
        });
        
        if (!user) throw new Error("User not found")
        const isPasswordCorrect = await compare(credentials.Password,user.password)
        if(!isPasswordCorrect){
          throw new Error("Wrong infromations")
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
   
    async jwt({ token, user,profile,account}) {
      const profile = profile as unknown as null
      if (user) {
        if(account?.provider=="google"){
          const u = user as unknown as any
          const prisma = new PrismaClient();
          let dbUser = await prisma.user.findUnique({
            where: {
              email: p.email ,
            },
          });
  
          if (!dbUser) {
            try {
              const response = await fetch("/api/signUp", {
                  method: "POST",
                  body: JSON.stringify({email: p.email,password: "",name : p.name}),
              });
             
              if (response.ok) {
                toast.success("User registered successfully");
              } else {
                  // Handle the error response from the API
                const errorResponse = await response.json();
                toast.error(errorResponse.error);
              }
            } catch (error) {
              // Handle any other unexpected errors
              toast.error("An error occurred while registering, Try again");
            }
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
    async session({ session, token }) {
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
  // async signIn(){
  //     return "/Homme"
  // },
  // pages: {
  //   signIn: '/login',
  //   signOut:  '/login'
  // }
};
const handler =NextAuth(authOptions);
export { handler as GET, handler as POST}