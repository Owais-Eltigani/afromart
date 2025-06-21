import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type SearchProductCardProps = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  freeDelivery: boolean;
  authentic: boolean;
  image: ImageSourcePropType;
};

export default function SearchProductCard(props: SearchProductCardProps) {
  const {
    name,
    price,
    originalPrice,
    category,
    rating,
    reviews,
    freeDelivery,
    authentic,
    image,
  } = props;

  return (
    <View className="bg-white py-4 pl-4 pr-3 rounded-xl shadow-sm mb-4">
      <View className="flex-row ">
        <View className="w-40 h-34 bg-gray-100 rounded-lg justify-center items-center mr-4">
          <Image
            source={image}
            className="w-24 h-24"
            style={{ resizeMode: 'contain' }}
          />
          <TouchableOpacity className="absolute top-1 right-1 bg-white/70 rounded-lg p-1">
            <Ionicons name="heart-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <Text className="text-base font-bold" numberOfLines={1}>
            {name}
          </Text>
          <View className="my-1">
            <View className="bg-orange-400 self-start px-2 py-0.5 rounded-xl">
              <Text className="text-xs text-white font-bold">{category}</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="star" color="#FBBF24" />
            <Text className="text-sm text-gray-600 ml-1">
              {rating} ({reviews} reviews)
            </Text>
          </View>

          <View className="flex-row items-baseline my-1">
            <Text className="text-lg font-bold text-orange-800">
              ₹{price.toLocaleString()}
            </Text>
            {originalPrice && (
              <Text className="text-sm text-gray-400 line-through ml-2">
                ₹{originalPrice.toLocaleString()}
              </Text>
            )}
          </View>

          <View className="flex-row justify-between items-center mt-2">
            <TouchableOpacity className="border border-orange-500 rounded-lg px-4 py-2">
              <Text className="text-orange-500 font-bold text-sm">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*  */}

      <View className="flex flex-row justify-center my-2 items-center gap-7 mt-5">
        {freeDelivery && (
          <View className="flex-row items-center ">
            <Ionicons name="rocket-outline" size={14} color="green" />
            <Text className="text-xs text-gray-500 ml-1">Free delivery</Text>
          </View>
        )}
        {authentic && (
          <View className="flex-row items-center ">
            <Ionicons name="shield-checkmark-outline" size={14} color="blue" />
            <Text className="text-xs text-gray-500 ml-1">Authentic</Text>
          </View>
        )}
      </View>
    </View>
  );
}
