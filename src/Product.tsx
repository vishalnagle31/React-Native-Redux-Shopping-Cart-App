import React from 'react';
import { View, FlatList, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from './redux/action/Actions';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    price: '$100',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg'
  },
  {
    id: 2,
    name: 'Project 2',
    price: '$150',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg'
  },
  {
    id: 3,
    name: 'Project 3',
    price: '$150',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg'
  },
  {
    id: 4,
    name: 'Project 4',
    price: '$150',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg'
  },
  {
    id: 5,
    name: 'Project 5',
    price: '$150',
    image: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/51UUezRooCL._AC_UY1000_.jpg'
  },
  // Add more project objects as needed
];

const Products = ({navigation}:{navigation: any}) => {

    const dispatch = useDispatch(); 
    const addedItem = useSelector(state => state.Reducers); 

    console.log("added --> ",addedItem)

    const AddItems = (item) => {
          console.log("added  --> ",item)
          dispatch(addItemsToCart(item))
    }


  const renderItem = ({ item }) => (
    <View  style={{ marginBottom: 20 }}>
      <Image source={{uri: item.thumbnail}} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button  title='shopNow' onPress={()=>{AddItems(item)}}/>
    </View>
  );

  return (
    <View>
        <TouchableOpacity onPress={()=>{navigation.navigate('CartScreen')}}>

    <Text>Count of Products {addedItem.length}</Text>
        </TouchableOpacity>
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      />
      </View>
  );
};

export default Products;
