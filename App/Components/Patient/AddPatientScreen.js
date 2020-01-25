import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Formik,
} from 'formik';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { compose } from 'recompose';
import * as Yup from 'yup';
import styles from '../Styles/PatientStyles/AddPatientStyles';
import images from '../../Themes/Images';
import Input from '../../utils/Input.util';
import colors from '../../Themes/Colors';
import width from '../../utils/width.util';
import Button from '../../utils/Button.util';

class AddPatient extends Component {
  _handleChange = (item, value) => {
    this.setState({ [item]: value });
  };

  render() {
    const marginInput = 25;
    const name = ['First name', 'Last name', 'Birthday', 'Address', 'Phone number', 'Email', 'Weight', 'Height'];
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.bg }}>
        <View
          style={styles.container}
        >
          <View style={styles.inputContainer}>
            {name.map(el => (
              <Input callbackChange={this._handleChange} placeholder={el} type={el} />
            ))
                }
          </View>
          <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            }}
            >
              <Text>Case history</Text>
              <TouchableOpacity
                onPress={() => console.log('123')}
              >
                <Text style={{ color: colors.red }}>Choose file</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>Case history</Text>
              <TouchableOpacity
                onPress={() => console.log('123')}
              >
                <Text style={{ color: colors.red }}>Choose file</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button redBtn nameButton="Save" onPress={() => console.log('123')} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddPatient;
