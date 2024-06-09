import { connect } from '@/app/dbConfig/dbConfig'
import Exercise from '@/app/models/ExerciseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { title, content, blocklyXML, courses, difficulty } = reqBody

    const newExercise = new Exercise({
      title,
      content,
      blocklyXML,
      courses,
      difficulty,
    })
    await newExercise.save()

    const response = NextResponse.json({
      message: 'Exercise created',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
