import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  { icon: 'cube-outline', text: 'My Orders', subtext: 'Track your purchases' },
  { icon: 'heart-outline', text: 'Wishlist', subtext: 'Your favorite items' },
  { icon: 'gift-outline', text: 'Rewards', subtext: 'Earn points & discounts' },
  {
    icon: 'location-outline',
    text: 'Addresses',
    subtext: 'Manage delivery locations',
  },
  {
    icon: 'card-outline',
    text: 'Payment Methods',
    subtext: 'Cards & mobile money',
  },
  {
    icon: 'notifications-outline',
    text: 'Notifications',
    subtext: 'Manage your alerts',
  },
  {
    icon: 'help-circle-outline',
    text: 'Help & Support',
    subtext: 'Get assistance',
  },
  { icon: 'settings-outline', text: 'Settings', subtext: 'App preferences' },
];

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center mt-10">
          <Image
            source={require('@/assets/images/react-logo.png')}
            className="w-24 h-24 rounded-full border-4 border-white bg-gray-200"
          />
          <Text className="text-2xl font-bold mt-4">Amara Kone</Text>
          <Text className="text-gray-500">amara.kone@email.com</Text>
          <View className="bg-yellow-100 px-4 py-1 rounded-full mt-2 border border-yellow-300">
            <Text className="text-yellow-800 font-bold">Premium Member</Text>
          </View>
        </View>

        <View className="flex-row justify-around my-8">
          <View className="items-center bg-white p-4 rounded-xl shadow-sm w-28 border border-gray-100">
            <Text className="text-2xl font-bold text-orange-500">12</Text>
            <Text className="text-gray-500">Orders</Text>
          </View>
          <View className="items-center bg-white p-4 rounded-xl shadow-sm w-28 border border-gray-100">
            <Text className="text-2xl font-bold text-purple-500">8</Text>
            <Text className="text-gray-500">Wishlist</Text>
          </View>
          <View className="items-center bg-white p-4 rounded-xl shadow-sm w-28 border border-gray-100">
            <Text className="text-2xl font-bold text-green-500">₹45K</Text>
            <Text className="text-gray-500">Saved</Text>
          </View>
        </View>

        <View className="px-5">
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.text}
              className="flex-row items-center bg-white p-4 rounded-xl mb-3 shadow-sm">
              <Ionicons name={item.icon as any} size={24} color="#4B5563" />
              <View className="flex-1 ml-4">
                <Text className="text-base font-semibold">{item.text}</Text>
                <Text className="text-sm text-gray-500">{item.subtext}</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-5 mt-5 mb-10">
          <TouchableOpacity className="border border-red-500 rounded-xl p-4">
            <Text className="text-center text-red-500 font-bold text-base">
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
