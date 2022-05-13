import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpense } from '../utils/http';

function RecentExpense() {
    // const expensesCtx = useContext(ExpensesContext);
    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpense();
            setFetchedExpenses(expenses);
        }
        getExpenses();
    }, []);

    const recentExpenses = fetchedExpenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    })
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallbackText='No expenses made in the last 7 days.' />
    )
}

export default RecentExpense;