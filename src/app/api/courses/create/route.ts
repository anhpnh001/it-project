import { connect } from '@/app/dbConfig/dbConfig'
import Course from '@/app/models/CourseModels'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { title, description, categories } = reqBody
    console.log(reqBody)

    const newCourse = new Course({
      title,
      description,
      categories,
    })
    await newCourse.save()

    const response = NextResponse.json({
      message: 'Course created',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
