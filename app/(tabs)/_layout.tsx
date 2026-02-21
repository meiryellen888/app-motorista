import { Tabs } from 'expo-router';
import React from 'react';

import DashBoardHeader from '@/components/dashboard/DashBoardHeader';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{flex: 1}}>

      <DashBoardHeader
        appName='App Motorista'
        userName= 'Meiryellen Proença'
      
      />


    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown : false, 
   
        
        // estilo da barra inferior
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 0,
          paddingTop: 6,
          paddingBottom: 10,

          height: 74,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,

          backgroundColor: "#0b63ce",
          borderTopWidth: 0,

          // sombra pra Ios
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 8},
          shadowOpacity: 0.15,
          shadowRadius: 10,

          // sombra para Android
          elevation: 10,

        },

        tabBarIconStyle: {marginTop: 4},

        
        tabBarInactiveTintColor: "#d7e8ff",
        
        // some com o texto do tab
        tabBarShowLabel: false,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused}) => (
            <Ionicons
            name= "home-outline"
            size= {focused ? 30 : 26}
            color= {color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="veiculos"
        options={{
          tabBarIcon: ({ color, size, focused}) => (
            <Ionicons
            name= "car-outline"
            size= {focused ? 30 : 26}
            color= {color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="mapa"
        options={{
          tabBarIcon: ({ color, size, focused}) => (
            <Ionicons
            name= "map-outline"
            size= {focused ? 30 : 26}
            color= {color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="alertas"
        options={{
          tabBarIcon: ({ color, size, focused}) => (
            <Ionicons
            name= "notifications-outline"
            size= {focused ? 30 : 26}
            color= {color}
            />
          )
        }}
      />

      <Tabs.Screen
        name= "bloqueio"
        options={{
          tabBarIcon: ({ color, size, focused}) => (
            <Ionicons
            name= "stop-outline"
            size= {focused ? 30 : 26}
            color= {color}
            />
          )
        }}
      />
     <Tabs.Screen
     name="explore"
     options={{
      href: null,
     }}
      />

      
    </Tabs>

     </View> 
  );
}
