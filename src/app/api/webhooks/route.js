import { NextResponse } from "next/server";

export const POST = async (req) => {
  const product = await req.json();
  console.log(product);

  return NextResponse.json({ ...product }, { status: 200 });
};
