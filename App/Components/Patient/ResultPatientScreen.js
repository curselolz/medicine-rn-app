import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Switch from 'react-native-switch-pro';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../utils/Button.util';
import styles from '../Styles/PatientStyles/ResultPatientStyles';
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

class ResultScreen extends Component {
  _navToModal = () => {
    const { navigation } = this.props;
    navigation.navigate('ModalPatient');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.row, { marginTop: 33 }]}>
          <Text>Chronic heart failure</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <View style={styles.row}>
          <Text>Hypertension</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <View style={styles.row}>
          <Text>Age</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <View style={styles.row}>
          <Text>Diabetes</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <View style={styles.row}>
          <Text>Stroke</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <View style={styles.row}>
          <Text>Vascular lesion</Text>
          <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
        </View>
        <Button redBtn nameButton="Result" onPress={this._navToModal} />
      </View>
    );
  }
}

export default ResultScreen;
