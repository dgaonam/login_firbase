import { View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { Image } from "react-native";
import imgHome from "../../assets/splash.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, fontSize: 25, fontWeight: "bold" }}>Bienvenidos practica .</Text>
      <View style={{ flex: 8, width:"95%", alignContent: "center", alignSelf: "center" }}>
        <Image
          source={{ uri: imgHome }}
          style={styles.imageHome}
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