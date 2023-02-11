import { useState } from "react";
import { View,Text } from "react-native";
import { userCreate } from "../../config/auth";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import styles from "../Styles/Styles";

import { writeUserData } from '../../config/database';
import { async } from "@firebase/util";

const Register = ()=>{

    const [user,setUser] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [email,setEmail] = useState(null);
    const [confirmEmail,setConfirmEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [userId,setUserId] = useState(null);




    const Registrar= async()=>{
        let id = await userCreate(email,password);
        console.log(userId);
           writeUserData("users",id,email,user,firstName,lastName);
    };

    return(
        <View>
            <Input label={"Nombre usuario"} onChangeText={setUser} />
            <Input label={"Nombres"} onChangeText={setFirstName}/>
            <Input label={"Apellidos"} onChangeText={setLastName}/>
            <Input label={"Correo"} onChangeText={setEmail}/>
            <Input label={"Confirma Correo"} onChangeText={setConfirmEmail} />
            <Input label={"Contraseña"} onChangeText={setPassword} />
            <Input label={"Confirma Contraseña"} onChangeText={setConfirmPassword} />
            <Buttons onHandlerPress={Registrar} label={"Enviar"} icon={"save"} styles={styles} color={"#593275"}/>
            <Text>{userId}</Text>
        </View>
    );
};

export default Register;