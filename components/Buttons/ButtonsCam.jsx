import { Pressable,Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ButtonsCam=({label,onHandlerPress,icon,size,color ,styles})=>{
    
    return(
        <Pressable onPress={onHandlerPress} style={[styles.buttonCam,{backgroundColor:color}]}>
        <FontAwesome
            name={icon}
            size={size}
            color={color}
            style={[styles.buttonIcon]}
          />
        <Text style={[styles.buttonLabel]}>{label}</Text>
      </Pressable>
    );
};

export default ButtonsCam;