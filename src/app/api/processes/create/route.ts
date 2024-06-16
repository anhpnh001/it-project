import { connect } from '@/app/dbConfig/dbConfig'
import Process from '@/app/models/ProcessModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { user, course, completedExercises } = reqBody

    const newProcess = new Process({
      user,
      course,
      completedExercises,
    })

    await newProcess.save()

    const response = NextResponse.json({
      message: 'Process created',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
