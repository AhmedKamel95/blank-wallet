import { BaseService } from "./infrastructure/BaseService";

export interface Transaction {
  id: number;
  to?: string;
  from: string;
  value?: number;
  date: string;
}

export interface TransactionsServiceState {
  transactions: Array<Transaction>;
}

export class TransactionsService extends BaseService<TransactionsServiceState> {
  constructor(initialState: TransactionsServiceState) {
    super(
      initialState || {
        transactions: [],
      }
    );
  }

  public async addTransaction(newTransaction: Transaction): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const previousTransactionsList = this.getState().transactions;
        resolve(
          this.updateState({
            transactions: [...previousTransactionsList, newTransaction],
          })
        );
      }, 300);
    });
  }

  public async getListOfTransactions(): Promise<Array<Transaction>> {
    return new Promise<Array<Transaction>>((resolve) => {
      setTimeout(() => {
        resolve(this.getState().transactions);
      }, 300);
    });
  }
}
