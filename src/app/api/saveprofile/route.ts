// Import necessary modules and initialize database connection
import { connect } from '../../dbConfig/dbConfig';
import User from "@/app/models/UserModels";  // Assuming this path is correct
import { NextRequest, NextResponse } from "next/server";

connect();  // Ensure the database is connected

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, phone, photoUrl } = reqBody;

        console.log("Request Body:", reqBody);

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Assuming we are updating an existing user's profile
            existingUser.username = username;
            existingUser.phone = phone;
            existingUser.photoUrl = photoUrl;
            await existingUser.save();
            return NextResponse.json({
                message: "Profile updated successfully",
                success: true,
                user: existingUser
            }, { status: 200 });
        } else {
            // Create a new user profile
            const newUser = new User({ username, email, phone, photoUrl });
            await newUser.save();
            return NextResponse.json({
                message: "Profile saved successfully",
                success: true,
                user: newUser
            }, { status: 201 });
        }
    } catch (error: any) {
        console.error("Error in saveProfile:", error);
        return NextResponse.json({
            error: error.message || "Internal Server Error",
        }, { status: 500 });
    }
}
