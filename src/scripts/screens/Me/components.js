/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, Image,
} from 'react-native';

import styles from './styles';

const ConnectionProfileCircle = (connect) => {
  const name = connect.split(' ');

  return (
    <View style={styles.connectionsContainer} key={connect}>
      <Image
        source={{ uri: '../../../assets/icons/IMG_3663.jpeg' }}
        style={styles.connectionProfileCircle}
      />
      <Text style={[styles.textStyle, styles.connectionNameText]}>
        {name[0]}
      </Text>
      <Text style={[styles.textStyle, styles.connectionNameText]}>
        {name[1]}
      </Text>
    </View>
  );
};

export default ConnectionProfileCircle;
