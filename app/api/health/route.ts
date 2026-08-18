import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({ok:true,service:"forge-it",mode:process.env.NEXT_PUBLIC_AUTH_MODE||"mock"});}
