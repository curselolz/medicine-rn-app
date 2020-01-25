import React, { Component } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import images from '../Themes/Images';
import styles from './Styles/WelcomeScreenStyles';

const WelcomeScreen = props => (
  <View style={styles.container}>
    <Image source={images.heart} />
    <View style={styles.center}>
      <Text style={styles.textWelcome}>
        {'Welcome'.toUpperCase()}
      </Text>
      <Text>
        Quick access to data for each patient, instant calculation on a scale CHA2-DS2-VASc.
        The ability to schedule appointments, as well as regular communication with patients.
      </Text>
    </View>
  </View>
);

export default withNavigation(WelcomeScreen);
