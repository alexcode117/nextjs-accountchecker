import { NextRequest, NextResponse } from "next/server";
import { checkAccount } from "@/services/check-account";

export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url);

  const account = searchParams.get("account");

  if (!account) return NextResponse.json({ error: "Falta el usuario" }, { status: 400 });
  
  const result = await checkAccount(account);

  return NextResponse.json({ account: result });
};