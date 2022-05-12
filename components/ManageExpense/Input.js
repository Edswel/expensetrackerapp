import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, invalid, style, TextInputConfig }) {
    const inputStyles = [styles.input];

    if (TextInputConfig && TextInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...TextInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: 'black',
        marginBottom: 4
    },
    input: {
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 6,
        fontSize: 18,
        color: 'black'
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: GlobalStyles.colors.trashIconColor
    },
    invalidInput: {
        borderColor: '#f2a7b4'
    }
});