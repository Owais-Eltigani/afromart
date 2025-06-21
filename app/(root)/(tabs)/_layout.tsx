import TabIcon from '@/components/TabIcon';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,

        // tabBarStyle: {
        //   height: 50,
        //   borderTopWidth: 0,
        //   // padding: 10,
        //   elevation: 30,
        //   shadowColor: '#000',
        //   shadowOffset: { width: 0, height: -3 },
        //   shadowOpacity: 0.1,
        //   shadowRadius: 3,
        // },

        tabBarItemStyle: {
          // padding: 8,

          marginTop: 7,
          width: '100%',
          height: '100%',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} type="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} type="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} type="cart" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} type="person" />
          ),
        }}
      />
    </Tabs>
  );
}
