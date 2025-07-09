import { NextRequest, NextResponse } from "next/server";
import { checkAccountHistory } from "@/services/check-account-history";

export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url);

  const account = searchParams.get("account");

  if (!account) return NextResponse.json({ error: "Falta el usuario" }, { status: 400 });
  
  const history = await checkAccountHistory(account);

  return NextResponse.json({ history });
};