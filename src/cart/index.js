import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import {CartContext} from '../utils/context';
import Tile from './Tile';
import styles from './styles';
import {Appbar} from 'react-native-paper';

export default function Cart({navigation}) {
  const {cart, setCart} = useContext(CartContext);

  const renderItem = ({item}) => (
    <Tile
      itemName={item.itemName}
      id={item.id}
      price={item.price}
      description={item.description}
    />
  );

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} name="Cart" />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const Header = ({navigation, name}) => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: constants.accent,
        shadowOpacity: 0,
        elevation: 0,
      }}>
      <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
      <Appbar.Content
        title={name}
        titleStyle={{fontSize: 18, color: 'white'}}
      />
    </Appbar.Header>
  );
};
