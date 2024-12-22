import NextAuth, { Session, User } from 'next-auth';
import GitHub from '@auth/core/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
   throw new Error('missing github oauth credentials');
}

export const {
   handlers: { GET, POST },
   auth,
   signOut,
   signIn,
} = NextAuth({
   adapter: PrismaAdapter(db),
   providers: [
      GitHub({
         clientId: GITHUB_CLIENT_ID,
         clientSecret: GITHUB_CLIENT_SECRET,
      }),
   ],
   callbacks: {
      // usually not needed, we are fixing bug in nextauth
      //! The session function is called when verifying who a user is in the application
      async session({ session, user }: { session: Session; user: User }) {
         if (session && user) {
            if (session.user) {
               session.user.id = user.id;
            }
         }

         return session;
      },
   },
});
