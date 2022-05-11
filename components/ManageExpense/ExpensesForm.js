import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

function ExpensesForm() {
    function amountChangeHandler() { }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Add New Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label='Amount' TextInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler
                }} />
                <Input style={styles.rowInput} label='Date' TextInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { }
                }} />
            </View>
            <Input label='Description' TextInputConfig={{
                multiline: true
            }} />
        </View>
    )
}

export default ExpensesForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
});