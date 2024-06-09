import { connect } from '@/app/dbConfig/dbConfig'
import Exercise from '@/app/models/ExerciseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
  try {
    const exercises = await Exercise.find()
    return NextResponse.json({
      message: 'Exercises found',
      success: true,
      data: exercises,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
