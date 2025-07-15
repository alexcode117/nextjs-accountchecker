import { client } from "@/utils/clientHive";
import type { HiveOperation, HiveError } from "@/types/hive";
import type { AppliedOperation } from "@hiveio/dhive";

// getAccountHistory returns [number, AppliedOperation][]

type Result = HiveOperation | HiveError;

export const checkAccountHistory = async (
  account: string, 
  limit = 5
): Promise<Result[]> => {
  try {
    const historial: [number, AppliedOperation][] = await client.database.getAccountHistory(
      account, 
      -1,       
      limit
    );
    
    return historial.map(([id, opData]) => ({
      id,
      block: opData.block,
      timestamp: opData.timestamp,
      op: opData.op as [string, unknown], // Cast if you're sure it's compatible
    }));
  } catch (error) {
    console.error("Error fetching account history:", error);
    return [{ error: "Error al consultar el historial." }];
  }
};