import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView, Text, View, TouchableOpacity, TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import SelectProfilePicIcon from '../../../assets/icons/SelectProfilePicIcon.svg';
import BackArrow from '../../../assets/icons/BackArrowIcon.svg';

import styles from './styles';

import { createNewUser } from '../../state/actions/user';

const NewUserProfileScreen = ({ navigation: { navigate }, route: { params: { firstName, lastName } } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState(null);
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: `${firstName} ${lastName}` });
      await createNewUser({
        firstname: firstName,
        lastname: lastName,
        userEmail: email,
        profilePic: '',
        uid: auth().currentUser.uid,
      }, dispatch);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setSignupError(e);
      console.log(signupError);
    }
  };

  // TO DO: FUNCTION TO CHECK FOR A VALID PASSWORD AND EMAIL

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigate('UserInfo')}
      >
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <SelectProfilePicIcon />
        <Text style={styles.headerText}>
          Add profile picture
        </Text>
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          id="email"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#C4C4C4"
          style={styles.inputText}
        />
        <TextInput
          autoCapitalize="none"
          id="Password"
          secureTextEntry
          textContentType="password"
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          style={styles.inputText}
        />
        <TextInput
          autoCapitalize="none"
          id="confirmPassword"
          secureTextEntry
          textContentType="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#C4C4C4"
          style={styles.inputText}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.continueBtn, styles.loginBtn]}
          onPress={signup}
        >
          <Text style={styles.btnText}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewUserProfileScreen;
