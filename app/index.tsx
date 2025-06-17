import { Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className="bg-black p-5">
      <Link href={'/(root)/(tabs)/home'} className="text-gray-200 text-2xl">
        <Text>Edit app/index.tsx to edit this screen quickly</Text>
      </Link>
    </SafeAreaView>
  );
}
