import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import prisma from '@/lib/db';
import { authConfig } from '@/auth.config';

async function getUser(username) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUser(credentials.username);

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
});
