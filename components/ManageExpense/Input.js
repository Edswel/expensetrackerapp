import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({ label, style, TextInputConfig }) {
    const inputStyles = [styles.input];

    if (TextInputConfig && TextInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
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
    }
});