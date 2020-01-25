/* eslint-disable no-undef */
import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import styles from '../Styles/SignInScreenStyles';
import { Images } from '../../Themes';
import Button from '../../utils/Button.util';
import Input from '../../utils/Input.util';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  _collectData = () => {
    const { username, password } = this.state;
    const { navigation } = this.props;
    if (username === '' && password === '') {
      alert('Enter data');
    } else {
      console.log('ok ');
      console.log(this.state);
      navigation.navigate('Feed', { displayWelcome: true });
    }
  }

  _handleChange = (item, value) => {
    this.setState({ [item]: value });
  };

  _navToForgotPassword = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgotPass');
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Images.logo} />
        </View>
        <View>
          <Input
            placeholder="Username"
            callbackChange={this._handleChange}
            type="username"
            textContentType="username"
          />
          <Input
            placeholder="Password"
            propsStyle={{ marginTop: 45 }}
            callbackChange={this._handleChange}
            type="password"
            textContentType="password"
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button nameButton="Sign in" onPress={this._collectData} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: 'white' }}>Forgot password?</Text>
            <TouchableOpacity
              onPress={this._navToForgotPassword}
            >
              <Text style={{ marginLeft: 10, color: 'white', textDecorationLine: 'underline' }}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;
