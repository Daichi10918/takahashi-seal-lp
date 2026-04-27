import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Content-Type must be application/json" },
      { status: 415 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const result = contactSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: result.error.issues },
      { status: 400 },
    );
  }

  console.log("[contact] submission received:", result.data);

  return NextResponse.json({ ok: true });
}
