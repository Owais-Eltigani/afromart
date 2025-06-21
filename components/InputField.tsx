import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

type InputFieldProps = {
  placeholder?: string;
};

export default function InputField({
  placeholder = 'Search for African products...',
}: InputFieldProps) {
  return (
    <View className="flex-row items-center bg-amber-50 border border-yellow-300 rounded-full my-1 px-2.5 mx-3 my-5 shadow-sm">
      <Feather
        name="search"
        size={20}
        color="gray"
        style={{ marginLeft: 15 }}
      />
      <TextInput
        placeholder={placeholder}
        className="flex-1 h-12 pl-2.5 font-semibold placeholder:text-yellow-600 "
      />
    </View>
  );
}
