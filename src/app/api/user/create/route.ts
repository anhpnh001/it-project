import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/app/dbConfig/dbConfig';
import User from "@/app/models/UserModels"

connect();

export async function POST(req: NextRequest) {
  try {
    const { username, email, password, role, isActive } = await req.json();
    const newUser = new User({
      username,
      email,
      password,
      role,
      isActive,
    });
    await newUser.save();
    return NextResponse.json({ message: 'User created', newUser }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
