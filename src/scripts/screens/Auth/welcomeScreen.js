import React from 'react';
import {
  SafeAreaView, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const WelcomeScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.headerText}>
        Make it happen...
      </Text>
      <TouchableOpacity
        style={[styles.continueBtn, styles.signupBtn]}
        onPress={() => navigate('UserInfo')}
      >
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.continueBtn, styles.loginBtn]}
        onPress={() => navigate('Login')}
      >
        <Text style={styles.btnText}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
