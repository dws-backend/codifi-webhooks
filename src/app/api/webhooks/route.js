import { createEvent } from "@/lib/model/eventsModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const event = await req.json();
  const eventId = await createEvent(event);
  return NextResponse.json({ eventId, status: 200 });
};
