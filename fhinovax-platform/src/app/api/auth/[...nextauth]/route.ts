import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here we would use Prisma to verify against actual DB User model.
        // Mocking successful login for the Vercel prototype:
        
        if (credentials?.email === "admin@fhinovax.com" && credentials?.password === "admin") {
          return { id: "1", name: "Super Admin", email: "admin@fhinovax.com", role: "ADMIN" }
        }
        
        if (credentials?.email && credentials?.password) {
           return { id: "2", name: "Standard Client", email: credentials.email, role: "CLIENT" }
        }
        
        return null;
      }
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
  ],
  callbacks: {
    async jwt({ token, user }) {
       // Persist role to token
       if (user) {
         token.role = (user as any).role;
       }
       return token;
    },
    async session({ session, token }) {
      // Export role to session object
      if (session.user) {
         (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };
