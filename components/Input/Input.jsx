import { View, TextInput,Text } from "react-native";
import styles from "../Styles/Styles";

const Input = ({ label,placeholder,onChangeText}) => {
    return (
            <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent" />
            </View>
    );
};

export default Input;