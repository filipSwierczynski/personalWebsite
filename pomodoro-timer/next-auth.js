import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from 'bcryptjs';
import { connect } from 'mongodb';
import clientPromise from './mongodb';
require('dotenv').config();

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection('users').findOne({
          email: credentials.email,
        });

        if (user && (await verifyPassword(credentials.password, user.password))) {
          return { email: user.email };
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  database: process.env.MONGODB_URI, // replace with your MongoDB connection string
});