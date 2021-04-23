import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView, Text, View, TouchableOpacity, TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import BackArrow from '../../../assets/icons/BackArrowIcon.svg';

import styles from './styles';

const LoginScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState(null);

  const login = () => {
    auth().signInWithEmailAndPassword(email, password);
    // .then(() => {
    //   dispatch({ type: 'LOG_IN' });
    // })
    // .catch((err) => {
    //   setLoginErr(err);
    // });
  };

  const loginErrorHandler = () => {
    if (loginErr.code === 'auth/user-not-found') {
      return (
        <View className="error">
          <Text>
            Username does not match any profile. Please try again or create a new account.
          </Text>
        </View>
      );
    }
    return (
      <View className="error"><Text>{loginErr?.message}</Text></View>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigate('Welcome')}
      >
        <BackArrow />
      </TouchableOpacity>

      <View>
        <TextInput
          autoCapitalize="none"
          id="email"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
          placeholder="Username"
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
      </View>
      <View>
        <TouchableOpacity
          style={[styles.continueBtn, styles.loginBtn]}
          onPress={login}
        >
          <Text style={styles.btnText}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      {loginErr ? loginErrorHandler : <Text />}
    </SafeAreaView>
  );
};

export default LoginScreen;
