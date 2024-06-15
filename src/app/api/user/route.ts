import { connect } from '@/app/dbConfig/dbConfig'
import User from "@/app/models/UserModels"
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
  try {
    const user = await User.find()
    return NextResponse.json({
      message: 'UsersManagers found',
      success: true,
      data: user,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
