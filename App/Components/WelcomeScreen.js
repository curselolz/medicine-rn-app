import React, { Component, PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Quick access to data for each patient, instant calculation on a scale CHA2-DS2-VASc. The ability to schedule appointments, as well as regular communication with patients.</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
