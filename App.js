

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import AppointmentBookingScreen from "./src/components/AppointmentBookingScreen/AppointmentBookingScreen";
import AuthComponent from './src/components/AuthComponent';
import Booked from './src/components/Booked/Booked';
import DesignDetailScreen from './src/components/DesignDetailScreen/DesignDetailScreen';
import Header from './src/components/Header/Header';
import HomeScreen from './src/components/HomeScreen/HomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
LogBox.ignoreAllLogs(true);

// DesignDetailStack for navigating to DesignDetailScreen
const DesignDetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home2" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DesignDetail" component={DesignDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <>
    {isAuth ?
      (

        <NavigationContainer>

          <Header logOut={()=>{setIsAuth(false)}}/>
        
       <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // MaterialIcons
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Appointment Booking') {
              iconName = focused ? 'calendar' : 'calendar-outline'; // Ionicons
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Booked') {
              iconName = focused ? 'book' : 'book-outline'; // Ionicons
              return <Ionicons name={iconName} size={size} color={color} />;
            }
            
            // You can add more conditions for other tabs

            return null;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DesignDetailStack} />
        <Tab.Screen name="Appointment Booking" component={AppointmentBookingScreen} />
        <Tab.Screen name="Booked" component={Booked} />
      </Tab.Navigator>
    </NavigationContainer>
      ) : 
      (
        <AuthComponent onSuccess={setIsAuth}/>
      )
    }
      </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
