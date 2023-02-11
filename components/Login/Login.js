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
        let userId = await login(email, password);
        users = {
            operationType:userId.operationType,
            providerId:userId.providerId,
            email:userId.user.email,
            uid:userId.user.uid
        };
        console.log(users);
        if(userId!==null){
                navigation.navigate('Home');
            console.log(userId);
         } else
        {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <View>

            <Input label={"Correo"} onChangeText={setEmail} />

            <Input label={"Contraseña"} onChangeText={setPassword} />

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