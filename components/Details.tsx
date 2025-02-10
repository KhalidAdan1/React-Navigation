
import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({ navigation }: DetailsProps) {
  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}