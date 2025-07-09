import { client } from "@/utils/clientHive";

const checkAccount = async (account: string) => {
    try {
        const accounts = await client.database.getAccounts([account]);
        return accounts[0] || null;
    } catch (error: any) {
        return { error: error.message };
    }
};

export { checkAccount };