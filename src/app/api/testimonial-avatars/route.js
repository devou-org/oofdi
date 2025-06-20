import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder") || "avatars";
  const filename = searchParams.get("filename");

  const key = `${folder}/${Date.now()}-${filename}`;
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  const blob = await put(key, req.body, {
    access: "public",
    token,
  });

  return NextResponse.json(blob);
}
