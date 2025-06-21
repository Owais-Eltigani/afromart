import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

type IconPrope = {
  focused: boolean;
  type: string;
};

export default function TabIcon({ focused, type }: IconPrope) {
  return (
    <View className="items-center flex justify-center">
      <View
        className={`w-12 h-8  rounded-lg items-center justify-center ${
          focused ? 'bg-orange-100' : 'bg-transparent'
        }`}>
        <Ionicons
          name={focused ? type : `${type}-outline`}
          size={24}
          color={focused ? '#F97316' : '#6B7280'}
        />
      </View>
    </View>
  );
}
