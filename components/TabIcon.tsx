import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type TabIconProps = {
  type: 'home' | 'search' | 'cart' | 'person';
  focused: boolean;
};

export default function TabIcon({ type, focused }: TabIconProps) {
  const getIconName = (): keyof typeof Ionicons.glyphMap => {
    switch (type) {
      case 'home':
        return focused ? 'home' : 'home-outline';
      case 'search':
        return focused ? 'search' : 'search-outline';
      case 'cart':
        return focused ? 'cart' : 'cart-outline';
      case 'person':
        return focused ? 'person' : 'person-outline';
      default:
        return 'alert-circle-outline';
    }
  };

  const getLabel = () => {
    if (type === 'person') return 'Profile';
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <View className="items-center justify-center">
      <View
        className={`w-12 h-8 rounded-lg items-center justify-center ${
          focused ? 'bg-orange-100' : 'bg-transparent'
        }`}>
        <Ionicons
          name={getIconName()}
          size={type === 'cart' ? 26 : 24}
          color={focused ? '#F97316' : '#6B7280'}
        />
        {type === 'cart' && (
          <View className="absolute -right-1.5 -top-1.5 bg-red-500 rounded-full w-5 h-5 justify-center items-center border-2 border-white">
            <Text className="text-white text-[10px] font-bold">2</Text>
          </View>
        )}
      </View>
      <Text
        className={`text-xs mt-1 ${
          focused ? 'text-orange-500 font-bold' : 'text-gray-500'
        }`}>
        {getLabel()}
      </Text>
    </View>
  );
}
