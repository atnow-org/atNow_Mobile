import React, { useState } from 'react';
import {
  SafeAreaView, Text, View, TouchableOpacity, TextInput,
} from 'react-native';

import BackArrow from '../../../assets/icons/BackArrowIcon.svg';

import styles from './styles';

const NewUserInfoScreen = ({ navigation: { navigate } }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigate('Welcome')}
      >
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.headerText}>
        Let&apos;s create an account
      </Text>
      <View>
        <TextInput
          autoCapitalize="none"
          id="firstname"
          textContentType="givenName"
          value={firstname}
          onChangeText={setFirstname}
          placeholder="Firstname"
          placeholderTextColor="#C4C4C4"
          style={styles.inputText}
        />
        <TextInput
          autoCapitalize="none"
          id="lastname"
          textContentType="familyName"
          value={lastname}
          onChangeText={setLastname}
          placeholder="Lastname"
          placeholderTextColor="#C4C4C4"
          style={styles.inputText}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.continueBtn, styles.loginBtn]}
          onPress={() => navigate('UserProfile', { firstName: firstname, lastName: lastname })}
        >
          <Text style={styles.btnText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewUserInfoScreen;
