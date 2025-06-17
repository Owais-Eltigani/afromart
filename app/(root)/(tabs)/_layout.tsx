import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="search" options={{ headerShown: false }} />
      <Tabs.Screen name="cart" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
