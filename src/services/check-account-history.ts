import { client } from "@/utils/clientHive";

const checkAccountHistory = async (account: string, limit = 5) => {
    try {
      const historial = await client.database.getAccountHistory(
        account, 
        -1,       
        limit
      );
      return historial.map(([id, opData]: any) => ({
        id,
        block: opData.block,
        timestamp: opData.timestamp,
        op: opData.op
      }));
    } catch (error: any) {
      return [{ error: error.message }];
    }
};

export { checkAccountHistory };