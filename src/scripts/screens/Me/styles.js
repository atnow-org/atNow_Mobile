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
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  topSubsection: {
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '800',
    fontSize: 36,
  },
  textStyle: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
  },
  subheaderText: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
  },
  locationText: {
    fontWeight: '400',
  },
  connectionsText: {
    fontWeight: '400',
    color: '#B2B2B2',
    marginTop: 15,
  },
  subContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '85%',
  },
  activitiesIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  connectionProfileCircle: {
    width: 70,
    height: 70,
    borderRadius: 200,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  connectionNameText: {
    fontWeight: '400',
    fontSize: 14,
    alignSelf: 'center',
  },
  connectionsContainer: {
    flexDirection: 'column',
    // height: '25%',
  },
  settingsIconStyle: {
    alignSelf: 'flex-end',
    marginRight: 25,
  },

});
