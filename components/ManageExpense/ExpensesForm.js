import { View } from 'react-native';
import Input from './Input';

function ExpensesForm() {
    function amountChangeHandler() { }

    return (
        <View>
            <Input label='Amount' TextInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler
            }} />
            <Input label='Date' TextInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => { }
            }} />
            <Input label='Description' TextInputConfig={{
                multiline: true
            }} />
        </View>
    )
}

export default ExpensesForm;