/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import type { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'zapatillas'},
  {id: 2, name: 'pantalon'},
  {id: 3, name: 'remera'},
  {id: 4, name: 'corbata'},
  {id: 5, name: 'medias'},
  {id: 6, name: 'camisa'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize:30 }}>Products</Text>
      <FlatList
        data={products}
        renderItem={
          ({item})=>(
            <PrimaryButton
             onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
             label={item.name}
            />
          )
        }
      />



      <Text style={{marginBottom: 10, fontSize:30 }}>Ajustes</Text>
      <PrimaryButton
      onPress={() => navigation.navigate('Settings')}
      label="Ajustes"
      />
    </View>
  );
};
