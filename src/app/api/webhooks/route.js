import { NextResponse } from "next/server";

export const POST = async (req) => {
  const event = await req.json();
  console.log(event);

  return NextResponse.json({ status: 200 });
};
