import React from 'react';
import { View, FlatList, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItemFromCart } from './redux/action/Actions';

const Cart = ({navigation}) => {

    const dispatch = useDispatch(); 

    const DeleteItems = (item) => {
          console.log("DeleteItems  --> ",item)
          dispatch(removeItemFromCart(item))
    }

    const items = useSelector(state => state.Reducers);

    console.log("cart Items --> ", items)
  const renderItem = ({ item , index}) => (
    <View  style={{ marginBottom: 20 }}>
      <Image source={{uri: item.thumbnail}} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button  title='Delete Now ' onPress={()=>{DeleteItems(index)}}/>
    </View>
  );

  return (
    <View>
        <TouchableOpacity >

    <Text>Cart {items.length}</Text>
        </TouchableOpacity>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      />
      </View>
  );
};

export default Cart;
