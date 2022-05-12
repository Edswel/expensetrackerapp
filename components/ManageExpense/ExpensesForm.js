import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../UI/Button';
import Input from './Input';

function ExpensesForm({ submitButtonLabel, onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() { }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Add New Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label='Amount' TextInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues['amount']
                }} />
                <Input style={styles.rowInput} label='Date' TextInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>
            <Input label='Description' TextInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});