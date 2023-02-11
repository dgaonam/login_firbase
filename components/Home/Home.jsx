import { View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { Image } from "react-native";
import imgHome from "../../assets/home.jpg";
import useUsers from "../../hooks/useUsers";

const Home = ({ navigation }) => {
  const users = useUsers();
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, fontSize: 25, fontWeight: "bold" }}>Bienvenidos practica .</Text>
      <View style={{flexDirection: "row", flex:1}}>
        <Text style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>Usuario: {users.email}</Text>
        <Text style={{ flex: 1, fontSize: 15, fontWeight: "bold" }} onPress={()=>navigation.navigate('Login')}>Salir</Text>
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