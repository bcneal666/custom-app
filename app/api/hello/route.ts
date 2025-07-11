import { NextResponse } from 'next/server';

export async function GET() {
  const data = { hello: 'Hello, world!' };
  return NextResponse.json(data);
}
