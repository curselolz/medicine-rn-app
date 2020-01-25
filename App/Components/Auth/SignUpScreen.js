import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/SignInScreenStyles';
import { Images } from '../../Themes';
import Button from '../../utils/Button.util';
import Input from '../../utils/Input.util';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      username: '',
      password: '',
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

  _navToSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

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
          <Input
            placeholder="Username"
            propsStyle={{ marginTop: 45 }}
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
          <Button nameButton="Sign up" onPress={this._collectData} />
          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20,
          }}
          >
            <Text style={{ color: 'white' }}>Do you have an account?</Text>
            <TouchableOpacity
              onPress={this._navToSignIn}
            >
              <Text style={styles.textSignIn}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
