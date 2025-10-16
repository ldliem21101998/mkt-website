import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ cleared: true });
  response.cookies.set('allow_test', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0,
  });
  return response;
}