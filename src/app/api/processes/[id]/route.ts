import { connect } from '@/app/dbConfig/dbConfig'
import Process from '@/app/models/ProcessModel'
import { NextRequest, NextResponse } from 'next/server'
connect()

export async function GET(request: NextRequest) {
  try {
    const id = request.url.split('/').pop()

    const process = await Process.findById(id)
    if (!process) {
      return NextResponse.json(
        { message: 'Process not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({
      message: 'Process found',
      success: true,
      data: process,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
