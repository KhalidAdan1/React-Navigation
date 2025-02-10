import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Button, SafeAreaView } from "react-native";
import React from "react";


type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function Profile({navigation}:ProfileProps) {
return(
    <SafeAreaView>
    <Button 
    title="Return to Home Screen"
    
    onPress={()=>navigation.navigate('Details', { itemId: 34 })}
    />
    </SafeAreaView>
);

}