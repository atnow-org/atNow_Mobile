import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/homeScreen';
import MeScreen from '../screens/Me/meScreen';

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

// const MeTab = (props) => {
//   return (
//     <View
//       style={{ flex: 1, justifyContent: 'center' }}
//     />
//   );
// };

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
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
          component={ContactsTab}
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

export default MainTabBar;
