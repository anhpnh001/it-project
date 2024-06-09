import { connect } from '@/app/dbConfig/dbConfig'
import Exercise from '@/app/models/ExerciseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id, title, content, blocklyXML, courses, difficulty } = reqBody

    await Exercise.updateOne(
      { _id: id },
      { title, content, blocklyXML, courses, difficulty }
    )
    const response = NextResponse.json({
      message: 'Exercise updated',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
