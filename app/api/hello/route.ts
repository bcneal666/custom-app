import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("custom-app");
  const result = await db.collection("csDb").findOne({});
  return NextResponse.json(result);
}
