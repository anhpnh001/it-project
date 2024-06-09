import { connect } from '@/app/dbConfig/dbConfig'
import Course from '@/app/models/CourseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id, title, description, categories } = reqBody

    await Course.updateOne({ _id: id }, { title, description, categories })
    const response = NextResponse.json({
      message: 'Course updated',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
