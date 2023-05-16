import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const DetailScreen = () => {
  const naviagtion = useNavigation<any>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Pressable onPress={() => naviagtion.goBack()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};
