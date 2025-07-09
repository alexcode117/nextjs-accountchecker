import { client } from "@/utils/clientHive";
import type { HiveAccount, HiveError } from "@/types/hive";

type Result = HiveAccount | HiveError | null;

const checkAccount = async (account: string): Promise<Result> => {
    try {
        const accounts = await client.database.getAccounts([account]);
        return accounts[0] || null;
    } catch {
        return { error: "Error al consultar la cuenta." };
    }
};

export { checkAccount };