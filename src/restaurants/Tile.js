import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Divider, List} from 'react-native-paper';
import styles from './styles';

export default function Tile({name, description, menus, navigation}) {
  useEffect(() => {
    console.log(name);
  }, []);

  const handleOnPress = () => {
    navigation.navigate('Details', {menus, name, description});
  };

  return (
    <>
      <List.Item
        style={styles.tile}
        title={name}
        titleStyle={styles.titleStyle}
        description={description}
        descriptionStyle={styles.descriptionStyle}
        onPress={handleOnPress}
      />
      <Divider style={styles.divider} />
    </>
  );
}
