import { connect } from '@/app/dbConfig/dbConfig'
import Course from '@/app/models/CourseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
  try {
    const id = request.url.split('/').pop()

    const course = await Course.findById(id)
    if (!course) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 })
    }
    return NextResponse.json({
      message: 'Course found',
      success: true,
      data: course,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
