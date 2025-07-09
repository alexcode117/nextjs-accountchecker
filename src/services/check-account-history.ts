import { client } from "@/utils/clientHive";
import type { HiveOperation, HiveError } from "@/types/hive";

type RawOpData = {
  block: number;
  timestamp: string;
  op: [string, unknown];
};

type RawHistoryItem = [number, RawOpData];

type Result = HiveOperation | HiveError;

const checkAccountHistory = async (account: string, limit = 5): Promise<Result[]> => {
    try {
      const historial: RawHistoryItem[] = await client.database.getAccountHistory(
        account, 
        -1,       
        limit
      );
      return historial.map(([id, opData]) => ({
        id,
        block: opData.block,
        timestamp: opData.timestamp,
        op: opData.op
      }));
    } catch {
      return [{ error: "Error al consultar el historial." }];
    }
};

export { checkAccountHistory };