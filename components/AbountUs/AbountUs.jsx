import { Text, View,Image } from "react-native";
import imgAbount from "../../assets/somos.png";
import styles from "../Styles/Styles";

const AbountUs = () => {
    return (
        <View style={{ flex: 10, flexDirection: "column", alignContent: "center", backgroundColor: "#FFFFFF" }}>
            <View style={{ flex: 4, flexDirection: "column",width:"100%", alignContent: "center", alignSelf: "center" }}>
            <Image
                source={{ uri: imgAbount }}
                style={{ flex: 1,  alignContent: "center" }}
                resizeMode="contain"
            />
            </View>
            <Text style={{flex:5}}>La Enciclopedia de Ejemplos y todos sus contenidos pertenecen a Editorial Etecé, una productora de contenidos educativos que distribuye enciclopedias confiables, libres y gratuitas, para potenciar el aprendizaje de sus usuarios y fomentar su curiosidad.

¿Cuál es nuestro objetivo?
La Enciclopedia de Ejemplos nace en el año 2015 con el objetivo de facilitar y potenciar el aprendizaje a través de grandes listas de ejemplos de una inmensa cantidad de temas (lengua, gramática, inglés, química, biología, y mucho más).

Como en todos nuestros proyectos, buscamos proporcionar información completa y confiable sobre distintos temas de interés buscados por nuestros usuarios. Ofrecemos investigaciones claras, confiables y adaptadas a las tendencias del mundo digital, para quienes necesiten explicaciones sencillas de los más variados temas.

</Text>

        </View>
    );
};

export default AbountUs;