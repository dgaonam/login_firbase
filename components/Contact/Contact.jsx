
import React,{useState} from 'react';
import { Image, View } from "react-native";

import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";

import Input from "../Input/Input";
import imgContact from "../../assets/contactanos.jpg";
const Contact = () => {
  return (
    <View style={{ flex: 10, flexDirection: "column", alignContent: "center", backgroundColor: "#FFFFFF" }}>
      <View style={{ flex:2, width: "100%", alignContent: "center", alignSelf: "center" }}>
        <Image
          source={{ uri: imgContact }}
          style={{ flex: 7,justifyContent:"space-evenly" }}
          resizeMode={"contain"}
        />
      </View>
       <View style={{flex:4}}>
      <Input label={"Nombre"} placeholder={"Ingresa tu nombre"} />
      <Input label={"Paterno"} placeholder={"Apellido paterno"} />
      <Input label={"Materno"} placeholder={"Aplellido materno"} />
      <Input label={"Email"} placeholder={"Aplellido materno"} />
      <Input label={"Telefono"} placeholder={"Aplellido materno"} />
      </View>
      <View style={{flex:1}}>
      <Buttons
        label="Enviar"
        icon={"send"}
        onHandlerPress={() =>
          postData()
        }
        color={"#593275"}
        styles={styles}
      />
      </View>
    </View>
  );
};



export default Contact;