import { View, Text, TextInput } from 'react-native';

function Input({ label, TextInputConfig }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...TextInputConfig} />
        </View>
    );
}

export default Input;