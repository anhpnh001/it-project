import { connect } from '../../../dbConfig/dbConfig';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { Session } from "next-auth";
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
    signIn: '/login',
    signOut: '/logout' // Redirect to '/courses' after successful sign-in
  },
  callbacks: {
    redirect: async ({ url, baseUrl, session }: { url: string; baseUrl: string; session?: Session }) => {
      // Check if it's a sign-out action
      if (url === baseUrl + '/logout') {
        // Redirect to '/courses' after successful sign-out
        return baseUrl + '/';
      }
      // Redirect users to the login page by default (e.g., after sign-in)
      return baseUrl + '/login';
    },
  }

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
