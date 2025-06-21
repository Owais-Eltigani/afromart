import { featuredProducts } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const initialCartItems = [
  { ...featuredProducts[0], quantity: 1 },
  { ...featuredProducts[1], quantity: 1 },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: string, amount: number) => {
    setCartItems(
      cartItems
        .map(item => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2500;
  const total = subtotal + deliveryFee;

  const renderCartItem = ({ item }: { item: (typeof cartItems)[0] }) => (
    <View className="flex-row items-center bg-white p-4 rounded-2xl shadow-sm mb-4 ">
      <Image
        source={item.image}
        className="w-20 h-20 bg-gray-100 rounded-lg"
        resizeMode="contain"
      />
      <View className="flex-1 ml-4">
        <Text className="text-base font-bold" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-lg font-bold text-orange-500 my-1">
          ₹{item.price.toLocaleString()}
        </Text>
        <View className="flex-row items-center mt-2">
          <TouchableOpacity
            onPress={() => handleQuantityChange(item.id, -1)}
            className="p-1 border border-gray-300 rounded-md">
            <Ionicons name="remove" size={20} color="gray" />
          </TouchableOpacity>
          <Text className="text-lg font-bold mx-4">{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleQuantityChange(item.id, 1)}
            className="p-1 border border-gray-300 rounded-md">
            <Ionicons name="add" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className="p-2">
        <Ionicons name="heart-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View className="p-5">
        <Text className="text-2xl font-bold">Shopping Cart</Text>
      </View>

      <FlatList
        className=" "
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

      <View className="p-5">
        <View className="bg-white p-4 rounded-xl shadow-md border border-yellow-300">
          <Text className="text-xl font-bold mb-4">Order Summary</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Subtotal</Text>
            <Text className="font-bold">₹{subtotal.toLocaleString()}</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-gray-600">Delivery</Text>
            <Text className="font-bold">₹{deliveryFee.toLocaleString()}</Text>
          </View>
          <View className="border-t border-gray-200 pt-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-extrabold">Total</Text>
              <Text className="text-xl font-extrabold text-orange-500">
                ₹{total.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity className="bg-orange-500 p-4 rounded-full mt-5">
          <Text className="text-white text-center font-bold text-lg">
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
