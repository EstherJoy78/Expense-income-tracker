import { useState, useEffect } from 'react';
import { Transaction } from './types/transaction';
import { TransactionForm } from './components/transaction-form';
import { SummaryCards } from './components/summary-cards';
import { TransactionList } from './components/transaction-list';
import { CategoryChart } from './components/category-chart';
import { TrendChart } from './components/trend-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Wallet } from 'lucide-react';

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((t: Transaction) => ({
        ...t,
        date: new Date(t.date),
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: crypto.randomUUID(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Wallet className="size-8 text-primary" />
              <h1 className="text-3xl font-bold">Expense & Profit Tracker</h1>
            </div>
            <TransactionForm onAdd={handleAddTransaction} />
          </div>
          <p className="text-muted-foreground">
            Track your income and expenses to monitor your financial health
          </p>
        </div>

        <div className="space-y-6">
          <SummaryCards transactions={transactions} />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <TrendChart transactions={transactions} />
              <div className="grid gap-4 md:grid-cols-2">
                <CategoryChart transactions={transactions} type="expense" />
                <CategoryChart transactions={transactions} type="income" />
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <CategoryChart transactions={transactions} type="expense" />
                <CategoryChart transactions={transactions} type="income" />
              </div>
              <TrendChart transactions={transactions} />
            </TabsContent>

            <TabsContent value="transactions">
              <TransactionList 
                transactions={transactions} 
                onDelete={handleDeleteTransaction}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
