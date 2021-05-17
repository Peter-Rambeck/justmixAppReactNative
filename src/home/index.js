import React from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Restaurants from '../restaurants';
import Header from './Header';

export default function Home({navigation}) {
  console.log('navigation', navigation);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Restaurants'},
  ]);

  const FirstRoute = () => <View style={{flex: 1}}></View>;

  const SecondRoute = () => <Restaurants navigation={navigation} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={[styles.tabItem, index === i && styles.tabItemBottom]}
              onPress={() => setIndex(i)}>
              <Text style={{color: index === i ? constants.accent : 'grey'}}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={_renderTabBar}
        initialLayout={{width: constants.width}}
        sceneContainerStyle={styles.sceneContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: constants.primary,
  },
  container: {
    flex: 1,
  },
  header: {
    color: constants.text,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginVertical: 5,
  },
  sceneContainerStyle: {
    backgroundColor: constants.primary,
  },
  tabBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  tabItemBottom: {
    borderBottomWidth: 1,
    borderBottomColor: constants.accent,
  },
});
