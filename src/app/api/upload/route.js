import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  const token = process.env.BLOB_READ_WRITE_TOKEN; // Secure

  const blob = await put(filename, req.body, {
    access: "public",
    token,
  });

  return NextResponse.json(blob);
}
