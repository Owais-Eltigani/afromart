import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { name: 'Food & Spices', icon: '🌶️', color: '#FEF7DC' },
  { name: 'Attire & Clothing', icon: '👗', color: '#F0F8FF' },
  { name: 'Perfumes', icon: '🌸', color: '#FFF0F5' },
  { name: 'Crafts & Art', icon: '🎨', color: '#F5F5F5' },
  { name: 'Jewelry', icon: '💎', color: '#E6E6FA' },
  { name: 'Home Decor', icon: '🏺', color: '#FFF5EE' },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Ankara Print Dress',
    price: '₹15,000',
    category: 'Attire',
    rating: 4.8,
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: '2',
    name: 'Shea Butter Perfume',
    price: '₹8,500',
    category: 'Perfumes',
    rating: 4.9,
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: '3',
    name: 'Jollof Rice Mix',
    price: '₹2,500',
    category: 'Food',
    rating: 4.7,
    image: require('@/assets/images/react-logo.png'),
  },
];

const recommendedProducts = [
  {
    id: '1',
    name: 'Hand-woven Kente Scarf',
    price: '₹5,000',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: '2',
    name: 'Beaded Maasai Necklace',
    price: '₹7,500',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: '3',
    name: 'Moroccan Lantern',
    price: '₹9,000',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: '4',
    name: 'Spicy Suya Mix',
    price: '₹1,500',
    image: require('@/assets/images/react-logo.png'),
  },
];

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center px-5 py-2.5 bg-white">
          <View>
            <Text className="text-2xl font-bold">AfroMart</Text>
            <Text className="text-sm text-gray-500">
              Discover African Excellence
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="notifications-outline" size={24} color="black" />
            <View className="ml-4">
              <Ionicons name="basket-outline" size={26} color="black" />
              <View className="absolute -right-1.5 -top-1 bg-red-500 rounded-lg w-4 h-4 justify-center items-center">
                <Text className="text-white text-[10px] font-bold">2</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row items-center bg-white rounded-full mx-5 my-2.5 px-2.5 shadow-sm border border-gray-200">
          <Feather
            name="search"
            size={20}
            color="gray"
            style={{ marginLeft: 15 }}
          />
          <TextInput
            placeholder="Search for African products..."
            className="flex-1 h-12 pl-2.5 text-base"
          />
        </View>

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Shop by Category</Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                className="w-[48%] h-24 rounded-2xl justify-center items-center mb-4"
                style={{ backgroundColor: category.color }}>
                <Text className="text-3xl">{category.icon}</Text>
                <Text className="mt-1 text-sm font-medium">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Featured Products</Text>
          <FlatList
            data={featuredProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View className="w-[170px] mr-4 bg-white rounded-2xl p-2.5 shadow">
                <View className="w-full h-30 rounded-xl bg-gray-100 mb-2.5 justify-center items-center">
                  <Image
                    source={item.image}
                    className="w-20 h-20"
                    style={{ resizeMode: 'contain' }}
                  />
                  <TouchableOpacity className="absolute top-2 right-2 bg-white/70 rounded-2xl p-1">
                    <Ionicons name="heart-outline" size={22} color="black" />
                  </TouchableOpacity>
                </View>
                <Text className="text-sm font-semibold">{item.name}</Text>
                <Text className="text-base font-bold my-1">{item.price}</Text>
                <View className="flex-row justify-between items-center mt-1">
                  <View className="bg-[#FEF7DC] px-2 py-1 rounded-xl">
                    <Text className="text-xs text-[#D2691E]">
                      {item.category}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={16} color="#FFC700" />
                    <Text className="ml-1 text-xs">{item.rating}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <View className="bg-[#D2B48C] rounded-2xl mx-5 my-2.5 p-5 items-center">
          <Text className="text-[22px] font-bold text-white">
            African Heritage Sale!
          </Text>
          <Text className="text-sm text-white my-1">
            Up to 30% off on traditional crafts
          </Text>
          <TouchableOpacity className="bg-white rounded-full py-2.5 px-8 mt-2.5">
            <Text className="text-base font-bold text-[#D2691E]">Shop Now</Text>
          </TouchableOpacity>
        </View>

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Recommended for You</Text>
          <View className="flex-row flex-wrap justify-between">
            {recommendedProducts.map(item => (
              <View
                className="w-[48%] bg-white rounded-2xl p-2.5 mb-4 shadow"
                key={item.id}>
                <View className="w-full h-30 rounded-xl bg-gray-100 mb-2.5 justify-center items-center">
                  <Image
                    source={item.image}
                    className="w-full h-30"
                    style={{ resizeMode: 'contain' }}
                  />
                  <TouchableOpacity className="absolute top-2 right-2 bg-white/70 rounded-2xl p-1">
                    <Ionicons name="heart-outline" size={22} color="black" />
                  </TouchableOpacity>
                </View>
                <Text className="text-sm font-semibold">{item.name}</Text>
                <Text className="text-base font-bold my-1">{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
