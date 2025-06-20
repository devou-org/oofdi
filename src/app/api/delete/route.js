
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  await del(url);
  return NextResponse.json({ success: true });
}
