import { StyleSheet, Dimensions } from 'react-native';

// import layout from '../../constants';

const iconDims = Dimensions.get('window').height / 25;

export default StyleSheet.create({
  tabIcon: {
    height: iconDims,
    width: iconDims,
  },
  bottomTabContainer: {
    backgroundColor: '#8296B117',
  },
});
