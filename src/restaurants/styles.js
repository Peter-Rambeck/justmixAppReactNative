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
  heading: {
    fontSize: 26,
    color: '#222',
    fontWeight: '600',
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
  chipContainer: {
    width: constants.width * 0.9,
    alignSelf: 'center',
    paddingVertical: 20,
  },
  chip: {
    padding: 4,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
