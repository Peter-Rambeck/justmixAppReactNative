import React from 'react';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({navigation}) {
  const cartIcon = () => (
    <Icon
      name="cart-outline"
      color="white"
      size={20}
      onPress={() => navigation.navigate('Cart')}
    />
  );

  return (
    <Appbar.Header
      style={{
        backgroundColor: constants.accent,
        shadowOpacity: 0,
        elevation: 0,
      }}>
      <Appbar.Content
        title="JustMix"
        titleStyle={{fontSize: 24, color: 'white'}}
      />
      <Appbar.Action icon={cartIcon} color="white" size={20} />
    </Appbar.Header>
  );
}
