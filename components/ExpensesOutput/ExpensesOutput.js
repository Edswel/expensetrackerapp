import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 99.99,
        date: new Date('2021-05-09')
    },
    {
        id: 'e2',
        description: 'Date Night',
        amount: 149.99,
        date: new Date('2022-04-19')
    },
    {
        id: 'e3',
        description: 'Some online course',
        amount: 199.99,
        date: new Date('2022-05-07')
    },
    {
        id: 'e4',
        description: 'Gin and Juice',
        amount: 9.99,
        date: new Date('202-02-12')
    },
    {
        id: 'e5',
        description: 'Summer Vacation',
        amount: 1000.99,
        date: new Date('2021-08-09')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.background
    }
});