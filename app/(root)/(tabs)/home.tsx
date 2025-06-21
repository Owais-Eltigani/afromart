import InputField from '@/components/InputField';
import ProductCard from '@/components/ProductCard';
import {
  categories,
  discountsAndOffers,
  featuredProducts,
  newArrivals,
  recommendedProducts,
} from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    //* top section
    <SafeAreaView className="flex-1 bg-stone-100" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('@/assets/images/texture.jpg')}
          className="w-full h-[120px] rounded-b-[30px] overflow-hidden">
          <View className="flex-1 flex-row justify-between items-center px-5 py-2.5 bg-yellow-800/85">
            <View>
              <Text className="text-3xl font-extrabold text-white">
                AfroMart
              </Text>
              <Text className="text-sm font-bold  text-gray-200">
                Discover African Excellence
              </Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="white" />
              <View className="ml-4">
                <Ionicons name="basket-outline" size={26} color="white" />
                <View className="absolute -right-1.5 -top-1 bg-red-500 rounded-lg w-4 h-4 justify-center items-center">
                  <Text className="text-white text-[10px] font-bold">2</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        {/* //* top section  // */}

        {/* //* search component*/}
        <InputField />

        {/* //* search component*/}

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Shop by Category</Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                className="w-[48%] h-24 rounded-2xl justify-center border-3 border-black items-center mb-4"
                style={{ backgroundColor: category.color }}>
                <Text className="text-3xl">{category.icon}</Text>
                <Text
                  className="mt-1 text-sm font-medium bg-stone-100 px-3  rounded-xl "
                  style={{ color: category.text }}>
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
            renderItem={({ item }) => <ProductCard {...item} />}
          />
        </View>

        {/* //* carsoul */}
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
        {/* //* carsoul */}

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">New Arrivals</Text>
          <FlatList
            data={newArrivals}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
          />
        </View>

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Discounts & Offers</Text>
          <FlatList
            data={discountsAndOffers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
          />
        </View>

        <View className="px-5 my-2.5">
          <Text className="text-xl font-bold mb-4">Recommended for You</Text>
          <ScrollView horizontal className="flex-row flex-wrap ">
            {recommendedProducts.map(item => (
              <View className="mb-4" key={item.id}>
                <ProductCard {...item} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
