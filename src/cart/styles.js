import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: constants.primary},
  tile: {
    paddingBottom: 10,
  },
  titleStyle: {
    fontSize: 22,
    color: '#222',
    fontWeight: '400',
  },
  descriptionStyle: {
    fontSize: 12,
    color: '#444',
    fontWeight: '300',
  },
  divider: {
    backgroundColor: constants.border,
    position: 'relative',
    left: 10,
  },
});
