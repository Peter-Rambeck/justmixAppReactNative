import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider, List} from 'react-native-paper';
import styles from './styles';
import {CartContext} from '../utils/context';

export default function DishTile({itemName, id, description, price}) {
  const {cart, setCart} = useContext(CartContext);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const _index = cart.findIndex(item => item.id === id);
    setIndex(_index);
  }, [cart]);

  const handleRemove = () => {
    const clone = [...cart];
    clone.splice(index, 1);
    setCart(clone);
  };

  const right = () => (
    <View style={{width: constants.width * 0.25}}>
      <Text style={[styles.descriptionStyle, {fontSize: 16}]}>$ {price}</Text>
      <TouchableOpacity
        style={{marginTop: 10, marginRight: 5}}
        onPress={handleRemove}>
        <Text
          style={[
            styles.descriptionStyle,
            {color: constants.accent, fontSize: 16, fontWeight: '600'},
          ]}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <List.Item
        key={id}
        style={styles.tile}
        title={itemName}
        titleStyle={styles.titleStyle}
        description={description}
        descriptionStyle={styles.descriptionStyle}
        right={right}
      />
      <Divider style={styles.divider} />
    </>
  );
}
