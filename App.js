
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from "./components/Styles/Styles";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserContext from "./context/UserContext";

import Home from './components/Home/Home';
import AbountUs from './components/AbountUs/AbountUs';
import Contact from './components/Contact/Contact';
import Cam from './components/Cam/Cam';

const Stack = createStackNavigator();

const user = {
  operationType:null,
  providerId:null,
  email:null,
  uid:null
};

export default function App() {
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#593275',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >

          <Stack.Screen
            name="register"
            options={{ title: 'Registro' }}
            component={Register}
          />

          <Stack.Screen
            name="Login"
            options={{ title: 'Inicio Session' }}

            component={Login}
          />

          <Stack.Screen
            name="Home"
            options={{ title: 'Inicio' }}
            component={Home}
          />
          <Stack.Screen
            name="Contact"
            options={{ title: 'Contactactanos' }}

            component={Contact}
          />
          <Stack.Screen
            name="AbountUs"
            options={{ title: 'Sobre nosotros' }}
            component={AbountUs}
          />

          <Stack.Screen
            name="Cam"
            options={{ title: 'Camara' }}
            component={Cam}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
