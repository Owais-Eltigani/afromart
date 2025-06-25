import SearchProductCard from '@/components/SearchProductCard';
import { products } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const product = {
  name: 'Ankara Print Dress',
  price: 15000,
  originalPrice: 18000,
  rating: 4.8,
  reviews: 124,
  inStock: 12,
  images: [
    // Replace with real image URLs
    'https://example.com/images/ankara1.jpg',
    'https://example.com/images/ankara2.jpg',
    'https://example.com/images/ankara3.jpg',
  ],
  tags: ['Attire & Clothing', 'AfroStyle'],
  features: [
    '100% Premium Cotton Fabric',
    'Traditional African Print',
    'Hand-stitched Details',
    'Available in Multiple Sizes',
    'Machine Washable',
    'Ethically Sourced',
  ],
  description: `Beautiful traditional Ankara print dress featuring vibrant African patterns. Made from high-quality cotton fabric with intricate geometric designs that celebrate African heritage. Perfect for special occasions, cultural events, or adding a touch of African elegance to your wardrobe.`,
  seller: {
    name: 'African Heritage Store',
    rating: 4.9,
    sales: 25400,
    response: 'Within 2 hours',
  },
  suggestions: [
    { name: 'Kente Cloth' },
    { name: 'African Print' },
    { name: 'Dashiki Shirt' },
  ],
};

export default function ProductDetailScreen() {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('Details');
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <SafeAreaView className="flex bg-stone-100">
      <ScrollView>
        {/* Image Gallery */}
        <View className="relative ">
          <Image
            source={{ uri: product.images[selectedImage] }}
            className="w-full h-80   bg-gray-200"
            resizeMode="cover"
          />
          <View className="absolute top-4 left-4 bg-red-500 px-2 py-1 rounded-full">
            <Text className="text-white font-bold text-xs">-17%</Text>
          </View>
          <View className="flex-row justify-start mt-4 ml-5">
            {product.images.map((img, idx) => (
              <TouchableOpacity
                key={idx}
                className={`mx-1 w-20 h-20 rounded-md border-2 ${selectedImage === idx ? 'border-orange-500' : 'border-gray-200'}`}
                onPress={() => setSelectedImage(idx)}>
                <Image
                  source={{ uri: img }}
                  className="w-full h-full rounded-md"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tags */}
        <View className="flex-row space-x-2 mt-4 px-4">
          {product.tags.map(tag => (
            <View key={tag} className="bg-yellow-100 px-2 py-1 rounded-full">
              <Text className="text-yellow-800 text-xs font-bold">{tag}</Text>
            </View>
          ))}
        </View>

        {/* Product Info */}
        <View className="px-4 mt-2">
          <Text className="text-xl font-bold">{product.name}</Text>
          <View className="flex-row items-center mt-1">
            <Text className="text-orange-800 text-2xl font-extrabold mr-2">
              ₹{product.price.toLocaleString()}
            </Text>
            <Text className="text-gray-400 line-through text-lg mr-2">
              ₹{product.originalPrice.toLocaleString()}
            </Text>
          </View>
          <View className="flex-row items-center mt-1 gap-2">
            <Ionicons name="star" size={16} color="#F59E42" />
            <Text className="ml-1 font-bold text-yellow-600">
              {product.rating}
            </Text>
            <Text className="ml-1 text-gray-500">
              ({product.reviews} reviews)
            </Text>

            <View className="bg-green-100 px-2 py-0.5 rounded-full">
              <Text className="text-green-700 text-xs font-bold">In Stock</Text>
            </View>
          </View>
        </View>

        {/* Quantity Selector */}
        <View className="flex-row justify-between px-4 mt-4">
          <View>
            <Text className="font-semibold mr-2">Quantity:</Text>
          </View>

          <View className="flex flex-row gap-3">
            <TouchableOpacity
              className="  border-2 border-slate-200  px-4 py-1   rounded"
              onPress={() => setQuantity(q => Math.max(1, q - 1))}>
              <Text className="font-bold text-lg">-</Text>
            </TouchableOpacity>
            <Text className="mx-3 text-xl">{quantity}</Text>
            <TouchableOpacity
              className="border-2 border-slate-200  px-4 py-1   rounded"
              onPress={() => setQuantity(q => q + 1)}>
              <Text className="font-bold text-lg">+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="ml-4 text-gray-500">
          Only {product.inStock} items left in stock
        </Text>

        {/* Action Buttons */}
        <View className="flex-row px-4 mt-4 space-x-2">
          <TouchableOpacity className="flex-1 bg-orange-800 py-3 rounded-lg">
            <Text className="text-white text-center font-bold">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Cards */}
        <View className=" space-y-4 border-2  rounded-lg m-4 p-2 border-slate-200 ">
          <View className="flex-row items-start  p-3 rounded-lg">
            <Ionicons name="rocket-outline" size={20} color="green" />

            <View>
              <Text className="ml-2 font-semibold ">Free Delivery</Text>
              <Text className="ml-2 text-gray-500">
                Delivered in 3-5 business days
              </Text>
            </View>
          </View>
          <View className="flex-row items-center  p-3 rounded-lg">
            <Ionicons name="refresh-outline" size={20} color="#2563EB" />

            <View>
              <Text className="ml-2 font-semibold ">Easy Returns</Text>
              <Text className="ml-2 text-gray-500">30-day return policy</Text>
            </View>
          </View>
          <View className="flex-row items-center  p-3 rounded-lg">
            <Ionicons
              name="shield-checkmark-outline"
              size={20}
              color="#7C3AED"
            />

            <View>
              <Text className="ml-2 font-semibold ">Secure Payment</Text>
              <Text className="ml-2 text-gray-500">
                100% secure transactions
              </Text>
            </View>
          </View>
        </View>

        {/* Seller Card */}
        <View className="px-4 m-4 bg-gray-50 border-2 border-slate-200  p-4 rounded-lg flex-col  gap-4">
          <View className="flex-row justify-between">
            <Text>Sold by</Text>

            <TouchableOpacity>
              <Text className="text-orange-500 font-bold">View Store</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row ">
            <View className="bg-yellow-200 w-12 h-12 rounded-full items-center justify-center">
              <Text className="text-xl font-bold text-yellow-800">AH</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="font-bold">{product.seller.name}</Text>
              <View className="flex-row items-center">
                <Ionicons name="star" size={14} color="#F59E42" />
                <Text className="ml-1 text-yellow-700 font-bold">
                  {product.seller.rating}
                </Text>
                <Text className="ml-2 text-gray-500">
                  · {product.seller.sales.toLocaleString()}+ sales
                </Text>
              </View>
              <Text className="text-xs text-gray-500">
                Response time: {product.seller.response}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row px-4 mt-6">
          {['Details', 'Specs', 'Reviews'].map(t => (
            <TouchableOpacity
              key={t}
              className={`flex-1 py-2 border-b-2 ${tab === t ? 'border-yellow-400' : 'border-gray-200'}`}
              onPress={() => setTab(t)}>
              <Text
                className={`text-center font-bold ${tab === t ? 'text-yellow-600' : 'text-gray-500'}`}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="px-4 mt-2">
          {tab === 'Details' && (
            <>
              <Text className="font-bold mb-2">Description</Text>
              <Text className="text-gray-700">{product.description}</Text>
              <Text className="font-bold mt-4 mb-2">Features</Text>
              {product.features.map(f => (
                <View key={f} className="flex-row items-center mb-1">
                  <Ionicons name="checkmark-circle" size={16} color="#10B981" />
                  <Text className="ml-2 text-gray-700">{f}</Text>
                </View>
              ))}
            </>
          )}
          {tab === 'Specs' && (
            <Text className="text-gray-500">Specs content goes here...</Text>
          )}
          {tab === 'Reviews' && (
            <Text className="text-gray-500">Reviews content goes here...</Text>
          )}
        </View>

        {/* Suggestions */}
        <View className="px-4 mt-8 mb-24">
          <Text className="font-bold mb-2">You might also like</Text>
          <FlatList
            horizontal
            data={products.slice(0, 3)}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View className=" bg-gray-100 rounded-lg mr-3 items-center justify-center">
                <SearchProductCard {...item} />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="absolute bottom-0 left-0 right-0 flex-row bg-white border-t border-gray-200 p-4">
        <TouchableOpacity className="flex-row flex-1 border border-gray-300 rounded-lg py-3 mr-2 justify-center gap-2">
          <Ionicons name="heart-outline" size={15} color="red" />
          <Text className="font-bold">Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row flex-1 bg-orange-800 rounded-lg py-3 justify-center gap-2">
          <Text className="text-white font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
