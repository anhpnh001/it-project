
import { connect } from '@/app/dbConfig/dbConfig';
import User from "@/app/models/UserModels"
import { NextRequest, NextResponse } from "next/server";
connect()

export async function GET(request: NextRequest){
    try {
        const id = request.url.split("/").pop();

        const UsersManager = await User.findById(id);
        if (!UsersManager) {
            return NextResponse.json({message: "UsersManager not found"}, {status: 404})
        }
        return NextResponse.json({
            message: "UsersManager found",
            success: true,
            data: UsersManager
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
