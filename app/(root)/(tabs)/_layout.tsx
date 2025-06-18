import TabIcon from '@/components/TabIcon';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          width: '100%',
          paddingHorizontal: 20,
          height: 60,
          //   marginBottom: 30,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',

          tabBarIcon: ({ focused }) => (
            <TabIcon title={'Home'} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',

          tabBarIcon: ({ focused }) => (
            <TabIcon title={'Search'} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          title: 'Cart',

          tabBarIcon: ({ focused }) => (
            <TabIcon title={'Cart'} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIcon title={'Profile'} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
