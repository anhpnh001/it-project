import { connect } from '../../../dbConfig/dbConfig';
import User from "@/app/models/UserModels"
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
import { error } from 'console';


connect()


export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { username, email, password } = reqBody

        console.log(reqBody)

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        console.log(savedUser)
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });

    } catch (err) {
        return NextResponse.json({ error: (err as Error).message }, { status: 500 });
    }
    // const {email, password} = await req.body.json();
    // const user = await User.findOne({email});
    // if(!user) {
    //     return NextResponse.json({message: "User not found"}, {status: 404});
    // }
    // const isPasswordValid = await bcryptjs.compare(password, user.password);
    // if(!isPasswordValid) {
    //     return NextResponse.json({message: "Invalid password"}, {status: 401});
    // }
    // return NextResponse.json({message: "Login successful"});
}