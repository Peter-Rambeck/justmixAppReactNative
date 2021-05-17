import React from 'react';
import {View, Text, FlatList} from 'react-native';
import DishTile from './DishTile';
import styles from './styles';

export default function Menu({data}) {
  const renderItem = ({item}) => (
    <DishTile
      itemName={item.itemName}
      id={item.id}
      price={item.price}
      description={item.description}
    />
  );

  return (
    <View style={{flex: 1}}>
      <View style={{marginLeft: 15, marginVertical: 10}}>
        <Text style={styles.heading}>Menu</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
