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
  contentContainer: {
    alignItems: 'center',
    height: '20%',
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
  signupBtn: {
    backgroundColor: '#70B7C0',
  },
  loginBtn: {
    backgroundColor: '#AAE88C',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
  },
  inputText: {
    fontWeight: '400',
    fontSize: 16,
    width: 250,
    borderBottomWidth: 3,
    borderBottomColor: '#6BAEB2',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  backArrow: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: -60,
  },
});
