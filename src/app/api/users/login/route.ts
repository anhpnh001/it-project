import { connect } from '../../../dbConfig/dbConfig';
import User from "@/app/models/UserModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Load environment variables
import { config } from 'dotenv';
config();

// Ensure the database is connected
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log('Request body:', reqBody);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.error('User does not exist');
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        console.log("User exists:", user);

        // Verify the password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            console.error('Invalid password');
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }
        console.log("Password is valid");

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        console.log('Token data:', tokenData);

        // Generate JWT token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
        console.log('Generated token:', token);

        // Prepare the response
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        // Set the token in an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure flag in production
            sameSite: 'strict', // Adjust based on your cross-site request needs
        });
        console.log('Token set in cookies');

        return response;
    } catch (error: any) {
        console.error('Error during login process:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
