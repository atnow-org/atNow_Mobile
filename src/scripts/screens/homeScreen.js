import React from 'react';
import {
  SafeAreaView, View, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

import StudyIconActive from '../../assets/icons/StudyIcon_active.svg';
// import StudyIconInactive from '../../assets/icons/StudyIcon_inactive.svg';
import PartyIconActive from '../../assets/icons/PartyIcon_active.svg';
// import PartyIconInactive from '../../assets/icons/PartyIcon_inactive.svg';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.headerText}>
        Let&apos;s make it happen!
      </Text>
      <Text style={styles.subHeaderText}>
        Select your mode(s):
      </Text>
      <View style={styles.iconContainer}>
        <View style={styles.rowContainer}>
          <StudyIconActive />
          <PartyIconActive />
        </View>
        <View style={styles.rowContainer}>
          <StudyIconActive />
          <PartyIconActive />
        </View>
        <View style={styles.rowContainer}>
          <StudyIconActive />
          <PartyIconActive />
        </View>
      </View>
      <Text style={styles.subHeaderText}>
        Optional: PUT INPUT BOX HERE
      </Text>
      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
