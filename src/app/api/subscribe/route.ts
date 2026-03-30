import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TODO: Connect to your newsletter service (Mailchimp, ConvertKit, etc.)
    console.log("Newsletter subscription:", email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Subscription failed" },
      { status: 500 }
    );
  }
}
