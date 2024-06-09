import { connect } from '@/app/dbConfig/dbConfig'
import Course from '@/app/models/CourseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id } = reqBody

    await Course.deleteOne({ _id: id })
    const response = NextResponse.json({
      message: 'Course deleted',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
