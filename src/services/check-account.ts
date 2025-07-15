import { client } from "@/utils/clientHive";
import type { HiveError } from "@/types/hive";
import type { ExtendedAccount } from "@hiveio/dhive";

type Result = ExtendedAccount | HiveError | null;

export const checkAccount = async (account: string): Promise<Result> => {
  try {
    const accounts: ExtendedAccount[] = await client.database.getAccounts([account]);
    return accounts[0] || null;
  } catch (error) {
    console.error("Error fetching account:", error);
    return { error: "Error al consultar la cuenta." };
  }
};