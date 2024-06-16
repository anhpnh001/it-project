import { connect } from '@/app/dbConfig/dbConfig'
import Process from '@/app/models/ProcessModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id, user, course, completedExercises } = reqBody

    await Process.updateOne({ _id: id }, { user, course, completedExercises })
    const response = NextResponse.json({
      message: 'Process updated',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
