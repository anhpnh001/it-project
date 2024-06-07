import { connect } from '../../../dbConfig/dbConfig';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";

connect();
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/courses',  // Redirect to '/courses' after successful sign-in
  },
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      // Redirect users to the courses page by default
      return baseUrl + '/courses';
    },
    // signOut: async ({ token, url }) => {
    //   // Perform any custom action on sign out, like logging or cleanup
    //   console.log('User signed out', token);
    //   // Redirect to homepage or custom page after logout
    //   return url || '/'; // Redirect to the home page after logout
    // }
  },
};

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return await NextAuth(req, res, authOptions);
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    return await NextAuth(req, res, authOptions);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
