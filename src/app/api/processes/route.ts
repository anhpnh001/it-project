import { connect } from '@/app/dbConfig/dbConfig'
import Process from '@/app/models/ProcessModel'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function GET(request: NextRequest) {
  try {
    const processes = await Process.find()
    return NextResponse.json({
      message: 'Processes found',
      success: true,
      data: processes,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
