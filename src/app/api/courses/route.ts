import { connect } from '@/app/dbConfig/dbConfig'
import Course from '@/app/models/CourseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
  try {
    const courses = await Course.find()
    return NextResponse.json({
      message: 'Courses found',
      success: true,
      data: courses,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
