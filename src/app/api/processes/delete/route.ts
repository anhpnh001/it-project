import { connect } from '@/app/dbConfig/dbConfig'
import Process from '@/app/models/ProcessModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { id } = reqBody

    await Process.deleteOne({ _id: id })
    const response = NextResponse.json({
      message: 'Process deleted',
      success: true,
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
