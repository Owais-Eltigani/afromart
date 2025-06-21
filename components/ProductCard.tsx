import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ProductProps = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  image: ImageSourcePropType;
  badge?: {
    type: string;
    color: string;
    content: string;
  };
};

export default function ProductCard({
  image,
  name,
  price,
  originalPrice,
  category,
  rating,
  badge,
}: ProductProps) {
  return (
    <View className=" bg-white rounded-2xl p-2.5 shadow mx-1">
      <View className="w-full h-30 rounded-xl bg-gray-100 mb-2.5 justify-center items-center">
        <Image
          source={image}
          className="w-48 h-48"
          style={{ resizeMode: 'contain' }}
        />
        {badge?.content && (
          <View
            className="absolute top-2 left-2 px-2 py-1 rounded-full"
            style={{ backgroundColor: badge.color }}>
            <Text className="text-white text-xs font-bold">
              {badge.content}
            </Text>
          </View>
        )}
        <TouchableOpacity className="absolute top-2 right-2 bg-white/70 rounded-lg p-2">
          <Ionicons name="heart-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-sm font-semibold">{name}</Text>
      <View className="flex-row items-center">
        <Text className="text-base font-bold my-1 text-orange-800">
          ₹ {price}
        </Text>
        {originalPrice && (
          <Text className="text-sm text-gray-500 line-through ml-2">
            ₹ {originalPrice}
          </Text>
        )}
      </View>
      <View className="flex-row justify-between items-center mt-1">
        <View className="bg-orange-400 px-2 py-1 rounded-xl">
          <Text className="text-xs text-white font-bold ">{category}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="star" size={16} color="#FFC700" />
          <Text className="ml-1 text-xs">{rating}</Text>
        </View>
      </View>
    </View>
  );
}
