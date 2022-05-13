import { createContext, useReducer } from "react";

// const DUMMY_EXPENSES = [
//     {
//         id: 'e1',
//         description: 'A pair of shoes',
//         amount: 99.99,
//         date: new Date('2021-05-09')
//     },
//     {
//         id: 'e2',
//         description: 'Date Night',
//         amount: 149.99,
//         date: new Date('2022-04-19')
//     },
//     {
//         id: 'e3',
//         description: 'Some online course',
//         amount: 199.99,
//         date: new Date('2022-05-07')
//     },
//     {
//         id: 'e4',
//         description: 'Gin and Juice',
//         amount: 9.99,
//         date: new Date('2022-02-12')
//     },
//     {
//         id: 'e5',
//         description: 'Summer Vacation',
//         amount: 1000.99,
//         date: new Date('2021-08-09')
//     },
//     {
//         id: 'd5',
//         description: 'Upgrade Workspace',
//         amount: 2500.99,
//         date: new Date('2022-05-10')
//     },
// ];


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: (expenses) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense, deleteExpense,
        updateExpense, updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
}

export default ExpensesContextProvider;