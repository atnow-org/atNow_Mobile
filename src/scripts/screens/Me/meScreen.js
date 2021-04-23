import React from 'react';
import {
  SafeAreaView, View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

import ActivityIcons from '../../../assets/constants/activitiesIcons';
import ConnectionProfileCircle from './components';

import styles from './styles';

import SettingsIcon from '../../../assets/icons/SettingsIcon.svg';

// This function will alter as the backend and analytics is fleshed out
// to track which activities are common for each user
const getTopActivities = () => {
  // test data
  const testData = ['study', 'chill', 'outing'];

  return (
    <View style={styles.activitiesIconContainer}>
      {testData.map((activity) => (
        ActivityIcons(activity)
      ))}
    </View>
  );
};

// This function will alter as the backend and analytics is fleshed out
// to track which activities are common for each user
const getTopConnections = () => {
  // Test Data
  const testData = ['Eileen Xia', 'Elliot Tang', 'Julia Snodgrass'];

  return (
    <View style={styles.activitiesIconContainer}>
      {testData.map((connec) => (
        ConnectionProfileCircle(connec)
      ))}
    </View>
  );
};

const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

const MeScreen = (props) => {
  const user = useSelector((state) => state.UserReducer);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        onPress={logout}
        style={styles.settingsIconStyle}
      >
        <SettingsIcon />
      </TouchableOpacity>
      <Text style={[styles.textStyle, styles.headerText]}>
        Welcome,
        {' '}
        {user.firstname}
      </Text>
      <View style={styles.topSection}>
        <Image
          source={{ uri: '../../../assets/icons/IMG_3663.jpeg' }}
          style={styles.profilePic}
        />
        <View style={styles.topSubsection}>
          <Text style={[styles.textStyle, styles.subheaderText, styles.nameText]}>
            {user.firstname}
            {' '}
            {user.lastname}
          </Text>
          <Text style={[styles.textStyle, styles.subheaderText, styles.locationText]}>
            Hanover, NH
          </Text>
          <Text style={[styles.textStyle, styles.subheaderText, styles.connectionsText]}>
            11 Connections
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.textStyle, styles.subheaderText]}>
          Top Activities
        </Text>
        {getTopActivities()}
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.textStyle, styles.subheaderText]}>
          Top Connections
        </Text>
        {getTopConnections()}
      </View>
    </SafeAreaView>
  );
};

export default MeScreen;
