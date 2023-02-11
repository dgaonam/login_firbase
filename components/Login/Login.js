import { useState } from "react";
import { View } from "react-native";
import { login } from "../../config/auth";

import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import styles from "../Styles/Styles";

import useUsers from "../../hooks/useUsers";


const Login = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const users = useUsers();

    const Entrar = async () => {
        let userId = null;
        
        try {
            userId= await login(email, password);
            users.email=userId.user.email;
            users.uid=userId.user.uid;
            users.operationType=userId.operationType;
            console.log(users);

            navigation.navigate('Home');
            console.log(userId);
            setEmail("");
            setPassword("");
        } catch (e) {
            console.log( (e).message );
            alert("Usuario o contraseña incorrectos " +  e.message);
        }
    };

    return (
        <View>

            <Input label={"Correo"} onChangeText={setEmail} />

            <Input label={"Contraseña"} onChangeText={setPassword} password={true} />

            <Buttons onHandlerPress={Entrar} label={"Entrar"} icon={"send"} styles={styles} color={"#593275"} />

            <Buttons
                label="Registrar"
                icon={"user"}
                onHandlerPress={() =>
                    navigation.navigate('register')
                }
                color={"#593275"}
                styles={styles}
            />

        </View>
    );
};

export default Login;