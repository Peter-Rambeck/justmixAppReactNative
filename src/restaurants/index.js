import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {api} from '../utils/api';
import Tile from './Tile';

export default function Restaurants({navigation}) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    console.log('gettingData');
    const data = await api.getData();
    console.log('data', data);
    setRestaurants(data.restaurants);
  };

  const renderItem = ({item}) => (
    <Tile
      name={item.name}
      description={item.description}
      menus={item.menus}
      navigation={navigation}
    />
  );

  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
