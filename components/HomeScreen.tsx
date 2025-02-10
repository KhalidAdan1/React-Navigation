import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile', {name:"Hey guys"})}
      />
    </View>
  );
}