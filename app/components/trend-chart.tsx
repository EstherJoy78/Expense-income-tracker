import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Transaction } from '../types/transaction';
import { format, startOfMonth, eachMonthOfInterval, subMonths } from 'date-fns';

interface TrendChartProps {
  transactions: Transaction[];
}

export function TrendChart({ transactions }: TrendChartProps) {
  const now = new Date();
  const sixMonthsAgo = subMonths(now, 5);
  
  const months = eachMonthOfInterval({
    start: sixMonthsAgo,
    end: now,
  });

  const monthlyData = months.map((month) => {
    const monthStart = startOfMonth(month);
    const monthKey = format(monthStart, 'MMM yyyy');

    const monthTransactions = transactions.filter((t) => {
      const transactionMonth = startOfMonth(new Date(t.date));
      return transactionMonth.getTime() === monthStart.getTime();
    });

    const income = monthTransactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = monthTransactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      month: monthKey,
      income,
      expenses,
      profit: income - expenses,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>6-Month Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Line key="income-line" type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Income" />
            <Line key="expenses-line" type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
            <Line key="profit-line" type="monotone" dataKey="profit" stroke="#3b82f6" strokeWidth={2} name="Profit" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-[#10b981]" />
            <span className="text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-[#ef4444]" />
            <span className="text-muted-foreground">Expenses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-[#3b82f6]" />
            <span className="text-muted-foreground">Profit</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}