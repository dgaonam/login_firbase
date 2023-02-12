
import React, { useState } from 'react';
import { Image, View } from "react-native";

import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";

import Input from "../Input/Input";
import imgContact from "../../assets/contactanos.jpg";

import { writeContacData } from '../../config/database';
import { v4 as uuidv4 } from 'uuid';
import useUsers from "../../hooks/useUsers";

const Contact = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  
  const users = useUsers();

  const contactanos = async () => {
    let id = uuidv4();
    console.log(id);
    writeContacData("contact", id, users.uid,email,firstName, lastName, phone, );
  };

  return (
    <View style={{ flex: 10, flexDirection: "column", alignContent: "center", backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 2, width: "100%", alignContent: "center", alignSelf: "center" }}>
        <Image
          source={{ uri: imgContact }}
          style={{ flex: 7, justifyContent: "space-evenly" }}
          resizeMode={"contain"}
        />
      </View>
      <View style={{ flex: 8 }}>
        <Input label={"Nombres"} onChangeText={setFirstName} placeholder={"Ingresa tus nombre"} />
        <Input label={"Apellidos"} onChangeText={setLastName} placeholder={"Ingresa tus apellidos"} />
        <Input label={"Email"} onChangeText={setEmail} placeholder={"Ingresa tu correo electronico"} />
        <Input label={"Telefono"} onChangeText={setPhone} placeholder={"Ingresa numero telefonico"} />
      </View>
      <View style={{ flex: 1 }}>
        <Buttons
          label="Enviar"
          icon={"send"}
          onHandlerPress={() =>
            contactanos()
          }
          color={"#593275"}
          styles={styles}
        />  
      </View>
    </View>
  );
};



export default Contact;