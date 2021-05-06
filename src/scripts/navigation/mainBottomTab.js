import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import { getUser } from '../state/actions/user';

import HomeScreen from '../screens/Home/homeScreen';
import MeScreen from '../screens/Me/meScreen';
import ContactsScreen from '../screens/Contacts/contactsScreen';
import WelcomeScreen from '../screens/Auth/welcomeScreen';
import NewUserInfoScreen from '../screens/Auth/newUserInfoScreen';
import NewUserProfileScreen from '../screens/Auth/newUserProfileScreen';
import LoginScreen from '../screens/Auth/loginScreen';
import ChatHomeScreen from '../screens/Chats/HomeScreen';

import styles from './styles';

import HomeActive from '../../assets/icons/Home_inactive.svg';
import HomeInactive from '../../assets/icons/Home_active.svg';
import ChatsActive from '../../assets/icons/Chats_active.svg';
import ChatsInactive from '../../assets/icons/Chats_inactive.svg';
import ContactsActive from '../../assets/icons/Contacts_active.svg';
import ContactsInactive from '../../assets/icons/Contacts_inactive.svg';
import MeActive from '../../assets/icons/Me_active.svg';
import MeInactive from '../../assets/icons/Me_inactive.svg';

const ChatsTab = (props) => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}
    />
  );
};

const ContactsTab = (props) => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}
    />
  );
};

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const AuthScreen = () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="UserInfo"
        component={NewUserInfoScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="UserProfile"
        component={NewUserProfileScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>

  </NavigationContainer>
);

const MainTabBar = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const store = useStore();

  async function onAuthStateChange(userInfo) {
    setUser(userInfo);
    // TO DO: this is where we trigger redux actions to fetch user info
    if (userInfo) {
      console.log(userInfo);
      Promise.all([
        await getUser(userInfo.uid, dispatch),
      ]);
      console.log(store.getState());
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    // unsubscribe when component unmount
    return subscriber;
  }, []);

  if (!user) return <AuthScreen />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            backgroundColor: '#303030',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 17,
          },
          labelStyle: {
            fontFamily: 'Avenir',
            fontWeight: '400',
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              focused
                ? <HomeActive style={styles.tabIcon} />
                : <HomeInactive style={styles.tabIcon} />
            ),
          }}

        />
        <Tab.Screen
          name="Chats"
          component={ChatsTab}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ focused }) => (
              focused
                ? <ChatsActive style={styles.tabIcon} />
                : <ChatsInactive style={styles.tabIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ focused }) => (
              focused
                ? <ContactsActive style={styles.tabIcon} />
                : <ContactsInactive style={styles.tabIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={MeScreen}
          options={{
            tabBarLabel: 'Me',
            tabBarIcon: ({ focused }) => (
              focused
                ? <MeActive style={styles.tabIcon} />
                : <MeInactive style={styles.tabIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (_state) => {
  return {};
};

const mapDispatchToProps = (_dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabBar);
