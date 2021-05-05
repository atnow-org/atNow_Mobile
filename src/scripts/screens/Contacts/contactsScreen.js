import React, { Component } from "react";
import {
  StyleSheet, Text, View, Button, SectionList
  // ScrollView,
} from "react-native";

import styles from './styles';
import ConnectionProfileCircle from '../Me/components';



// This function will alter as the backend and analytics is fleshed out
// to track each user's contacts
// main goal of this function is to sort contacts alphabetically by first name
const getContacts = () => {
  // test data
  const testData = [{index: 0, name: "Ashley Song"},{index: 1, name: "Audry Luna"},{index: 2, name: "Eileen Xia"},{index: 3, name: "Elliot Tang"},{index: 4, name: "Julia Snodgrass"},{index: 5, name: "Rhona He"}];
  let contactsArr = [];
    let aCode = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar
      };

      let currContacts = testData.filter(item => {
        return item.name[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.name.localeCompare(b.name));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }
    return contactsArr;
};

// This function will alter as the backend and analytics is fleshed out
// to track which activities are common for each user
// ***** need to edit the connectionProfileCircle component
const getStarredContacts = () => {
  // Test Data
  const testData = [{index: 0, name: "Ashley Song"},{index: 1, name: "Eileen Xia"}];

  return (
    <View style={styles.row}>
      {testData.map((contact) => (
        ConnectionProfileCircle(contact)
      ))}
    </View>
  );
};


const ContactsScreen = (props) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.subContainer}>
            <Text style={[styles.textStyle]}>
              Starred
            </Text>
            {getStarredContacts()}
          </View>

    <SectionList
      sections={this.getContacts()}
      ListHeaderComponent={() => <Button title="Add Contact" />}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={[styles.textStyle]}>
            {item.name}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={[styles.textStyle, styles.subheaderText]}>
            {section.title}
          </Text>
        </View>
      )}
      keyExtractor={item => item.index}
    />
  </View>
);

};

export default ContactsScreen;