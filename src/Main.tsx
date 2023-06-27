import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Main = ({navigation}: {navigation: any}) => { 

    return <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

        <TouchableOpacity onPress={() => {navigation.navigate('ThemeScreen')}} style={{height: 30}}> 
        <Text>Change Theme </Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => {navigation.navigate('ProductScreen')}} style={{height: 30}}> 
         <Text>Add to Cart </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('LanguageScreen')}} style={{height: 30}}> 
         <Text>Change LanguageScreen  </Text>
        </TouchableOpacity>

    </View>
}

export default Main;
