import { View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { Image } from "react-native";
import imgHome from "../../assets/home.jpg";
import useUsers from "../../hooks/useUsers";

import { readUserData } from '../../config/database';
import { useEffect, useState } from "react";

const Home = ({ navigation }) => {
  const [user,setUser] = useState();
  const users = useUsers();

  const searchUsers = async ()=>{
    let us = await readUserData("users", users.uid);
    setUser(us.firstName + " " + us.lastName);
  }

  useEffect(() => {
    searchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "column", flex:1}}>
      <Text style={{ flex: 1, fontSize: 25, fontWeight: "bold" }}>Bienvenidos practica 7.</Text>
        <Text style={{ flex: 1, fontSize: 12, fontWeight: "bold" }}>Usuario: {user} </Text>
        <Text style={{ flex: 1, fontSize: 12, fontWeight: "bold", alignContent: "flex-start",color:"#000" }} onPress={()=>navigation.navigate('Login')}>Salir</Text>
      </View>
      <View style={{ flex: 8, width:"100%", alignContent: "center", alignSelf: "center" }}>
        <Image
          source={{ uri: imgHome }}
          style={styles.imageHome}
          resizeMode={"stretch"}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
        <Buttons
          label="Contactanos"
          icon={"address-card"}
          onHandlerPress={() =>
            navigation.navigate('Contact')
          }
          color={"#593275"}
          styles={styles}
        />
        <Buttons
          label="Nosotros"
          icon={"info"}
          onHandlerPress={() =>
            navigation.navigate('AbountUs')
          }
          color={"#593275"}
          styles={styles}
        />
        <Buttons
          label="Camara"
          icon={"camera"}
          onHandlerPress={() =>
            navigation.navigate('Cam')
          }
          color={"#593275"}
          styles={styles}
        />
      </View>
    </View>
  );
};



export default Home;