import InputField from '@/components/InputField';
import SearchProductCard from '@/components/SearchProductCard';
import {
  categories,
  discountsAndOffers,
  featuredProducts,
  newArrivals,
  recommendedProducts,
} from '@/constants';
import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const allProducts = [
  ...featuredProducts,
  ...recommendedProducts,
  ...newArrivals,
  ...discountsAndOffers,
];
const filterCategories = [
  'All',
  ...new Set(categories.map(c => c.name.split(' & ')[0])),
];

export default function Search() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter(p => p.category.includes(activeCategory));

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-5 pt-5">
        <View className="flex-row items-center">
          <View className="flex-1">
            <InputField placeholder="Search products..." />
          </View>
          <TouchableOpacity className="bg-orange-500 rounded-full px-6 py-3 ml-2 ">
            <Text className="text-white font-bold">Filter</Text>
          </TouchableOpacity>
        </View>

        <View className="my-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filterCategories.map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  if (activeCategory === category) {
                    setActiveCategory('All');
                    return;
                  }
                  setActiveCategory(category);
                }}
                className={`px-4 py-2 rounded-full mr-2 ${
                  activeCategory === category
                    ? 'bg-orange-500'
                    : 'bg-white border border-gray-300'
                }`}>
                <Text
                  className={`font-bold ${
                    activeCategory === category ? 'text-white' : 'text-gray-700'
                  }`}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SearchProductCard {...item} />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
