export interface IAccount {
  id: number,
  userId: number,
  accountNumber: string,
  accountType: "COURANT" | "EPARGNE",
  solde: number,
  lastTransactionDate: Date
}
