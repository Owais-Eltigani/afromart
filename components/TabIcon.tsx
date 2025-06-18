import { Text } from '@react-navigation/elements';
import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function TabIcon({
  title,
  focused,
}: {
  title: string;
  focused: boolean;
}) {
  return (
    <View className="flex border w-[70px] h-full ">
      <Feather name={title.toLowerCase()} color="#000" size={24} />
      <Text className="color-white"> {title}</Text>
    </View>
  );
}
