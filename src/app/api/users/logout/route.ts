// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Set-Cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');
        res.status(200).json({
            message: "You have been logged out",
            success: true,
        });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}
