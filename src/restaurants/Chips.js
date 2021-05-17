import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

export default function Chips({
  categories,
  categorySelected,
  setCategorySelected,
}) {
  const handleOnPress = category => {
    setCategorySelected(category);
  };

  const renderItem = ({item}) => (
    <Chip
      style={[
        styles.chip,
        {
          backgroundColor:
            categorySelected === item ? constants.accent : constants.secondary,
        },
      ]}
      mode="flat"
      textStyle={{color: categorySelected === item ? '#fff' : '#000'}}
      onPress={() => handleOnPress(item)}>
      {item}
    </Chip>
  );

  return (
    <>
      <View style={{marginLeft: 15, marginTop: 10}}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      <View style={styles.chipContainer}>
        <FlatList
          numColumns={3}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}
