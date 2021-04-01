/* eslint-disable no-unused-vars */
import { StyleSheet, Dimensions } from 'react-native';

// import layout from '../../constants';

const iconDims = Dimensions.get('window').height / 25;

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#181818',
    fontFamily: 'Avenir',
  },
  headerText: {
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
  },
  subHeaderText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#FFFFFF',
  },
  rowContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '55%',
    paddingLeft: 25,
    marginTop: -40,
    marginBottom: -40,
  },
  continueBtn: {
    width: 179,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#70B7C0',
    color: '#181818',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
