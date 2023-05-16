import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const HomeScreen = () => {
  const naviagtion = useNavigation<any>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => naviagtion.push('Detail')}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};
