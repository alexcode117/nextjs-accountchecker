import { client } from "@/utils/clientHive";
import type { HiveAccount, HiveError } from "@/types/hive";

type Result = HiveAccount | HiveError | null;

export const checkAccount = async (account: string): Promise<Result> => {
  try {
    const accounts: HiveAccount[] = await client.database.getAccounts([account]);
    return accounts[0] || null;
  } catch (error) {
    console.error("Error fetching account:", error);
    return { error: "Error al consultar la cuenta." };
  }
};