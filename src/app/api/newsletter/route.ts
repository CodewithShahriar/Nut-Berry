import { NextResponse } from "next/server";

const SUBSCRIBERS: { email: string; date: string }[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (SUBSCRIBERS.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed to Nut & Berry updates!",
      });
    }

    SUBSCRIBERS.push({ email, date: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: "Welcome to Nut & Berry! Check your inbox soon for exclusive perks.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
