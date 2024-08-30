import DiscordProvider from "next-auth/providers/discord";
import NextAuth from "next-auth";
import { prismaClient } from "@/app/lib/route";

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID ?? "",
      clientSecret: process.env.CLIENT_SECRET ?? "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET ?? "",

  callbacks: {
    async signIn(params) {
      if (!params.user.email) {
        return false;
      }
      try {
        await prismaClient.user.create({
          data:{
            email:params.user.email,
            provider:"Discord",
          }
        });
      } catch (e) {}
      return true;
    },
  },
});

export { handler as GET, handler as POST };
