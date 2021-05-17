import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import Chips from './Chips';
import Menu from './Menu';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details({route, navigation}) {
  const {menus, name, description} = route.params;
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState({});
  const [categorySelected, setCategorySelected] = useState(null);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const _categories = [];
    const _items = {};
    const promise = menus.map(
      ({category, description, id, itemName, price}) => {
        _categories.push(category);
        _items[category]
          ? _items[category].push({description, id, itemName, price})
          : (_items[category] = [{description, id, itemName, price}]);
      },
    );
    Promise.all(promise).then(() => {
      const temp = [...new Set(_categories)];
      setCategories(temp);
      setItems(_items);
      setCategorySelected(temp[0]);
      console.log(_items[temp[0]]);
    });
  };

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} name={name} />
      <Chips
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        categories={categories}
      />
      <Menu data={items[categorySelected]} />
    </View>
  );
}

const Header = ({navigation, name}) => {
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
      <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
      <Appbar.Content
        title={name}
        titleStyle={{fontSize: 18, color: 'white'}}
      />
      <Appbar.Action icon={cartIcon} color="white" size={20} />
    </Appbar.Header>
  );
};
