import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import type {HomeScreenNavigationProp} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [value, setValue] = useState('');

  // Create the onChange function
  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <View className="flex-1 justify-end items-center">
      {/* <Text>Home Screen</Text> */}
      {/* <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      /> */}
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={onChangeText}
        value={value}
        className="border border-gray-400 border-b-0 w-full rounded-t-lg px-2 min-h-28 max-h-40"
      />
    </View>
  );
}
