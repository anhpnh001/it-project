import { connect } from '@/app/dbConfig/dbConfig'
import Exercise from '@/app/models/ExerciseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id } = reqBody

    await Exercise.deleteOne({ _id: id })
    const response = NextResponse.json({
      message: 'Exercise deleted',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
