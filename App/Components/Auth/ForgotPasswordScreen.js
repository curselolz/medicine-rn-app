import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from '../Styles/SignInScreenStyles';
import { Images } from '../../Themes';
import Button from '../../utils/Button.util';
import Input from '../../utils/Input.util';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
    };
  }

  _collectData = () => {
    const { emailAddress, username, password } = this.state;
    if (emailAddress === '' && username === '' && password === '') {
      alert('Enter data');
    } else {
      console.log('ok ');
      console.log(this.state);
    }
  }

  _handleChange = (item, value) => {
    this.setState({ [item]: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Images.logo} />
        </View>
        <View>
          <Input
            placeholder="Email"
            callbackChange={this._handleChange}
            type="emailAddress"
            textContentType="emailAddress"
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button nameButton="Reset" onPress={this._collectData} />
        </View>
      </View>
    );
  }
}

export default ForgotPassword;
