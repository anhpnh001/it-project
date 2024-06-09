
import { connect } from '@/app/dbConfig/dbConfig';
import Exercise from "@/app/models/ExerciseModels"
import { NextRequest, NextResponse } from "next/server";
connect()

export async function GET(request: NextRequest){
    try {
        const id = request.url.split("/").pop();

        const exercise = await Exercise.findById(id);
        if (!exercise) {
            return NextResponse.json({message: "Exercise not found"}, {status: 404})
        }
        return NextResponse.json({
            message: "Exercise found",
            success: true,
            data: exercise
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
