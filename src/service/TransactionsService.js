import http from "./HttpService";
import config from "../config/config.json";

export const getAllTransactions = () => http.get(config.transactionsPath);

export function addTransaction(transaction) {
    return http.post(config.transactionsPath,{
        sender: transaction.sender,
        receiver: transaction.receiver,
        amount: transaction.money
    });
}

