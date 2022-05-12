import axios from 'axios';
// const axios = require('axios');

export function storeExpense(expenseData) {
    axios.post(
        'https://fir-project-2c204-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
}