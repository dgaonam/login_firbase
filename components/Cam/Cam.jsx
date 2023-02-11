import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { Text, View } from "react-native";

import Buttons from "../Buttons/Buttons";
import CardImage from "../CardImage/CardImage";
import styles from "../Styles/Styles";
import ButtonsCam from '../Buttons/ButtonsCam';

const Cam = () => {
  const [type, setType] = useState(CameraType.back);
  const [permisos, setPermisos] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const cameraReferencia = useRef(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermisos(cameraStatus.status === 'granted');
    })();
  }, []);

  const tomarFoto = async () => {
    if (cameraReferencia) {
      try {
        const data = await cameraReferencia.current.takePictureAsync();
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const save = async() => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        MediaLibrary.createAlbumAsync('Expo', asset)
          .then(() => {
            console.log('Album created!');
            setImage(null);
          })
          .catch(error => {
            console.log('err', error);
          })
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("No image selected");
    }
  }

  if (!permisos) {
    return <View />;
  }

  if (!permisos.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Necesitas permisos para acceder a la camara </Text>
        <Buttons label={"Permisos"} onHandlerPress={setPermisos} size={20} color={"#593275"} styles={styles} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image === null ?
        <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraReferencia}>

          <View style={styles.buttonContainer}>
            <ButtonsCam label={""} onHandlerPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)} icon={"refresh"} size={20} styles={styles} />
            <ButtonsCam label={""} onHandlerPress={() => setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)} icon={"flash"} size={20} styles={styles} />
          </View>
        </Camera> : <View style={styles.camera}>
          <CardImage imagen={image} style={styles} />
        </View>
      }
      <View style={styles.buttonPanel}>
        {image === null ? (<Buttons label={"Tomar Foto"} onHandlerPress={tomarFoto} icon={"camera"} size={20} color={"#593275"} styles={styles} />)
          : (<View style={styles.buttonPanel}>
            <Buttons label={"Guardar"} onHandlerPress={save} icon={"save"} size={20} color={"#593275"} styles={styles} />
            <Buttons label={"Descartar"} onHandlerPress={() => setImage(null)} icon={"trash"} size={20} color={"#593275"} styles={styles} /></View>)}
      </View>

    </View>
  );
};

export default Cam;