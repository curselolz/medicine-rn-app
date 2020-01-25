import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Images } from '../Themes';

import styles from './Styles/LaunchScreenStyles';
import Button from '../utils/Button.util';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  navToSignIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  }

  navToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Images.logo} />
        </View>
        <View>
          <Button nameButton="Sign in" onPress={this.navToSignIn} />
          <Button nameButton="Sign up" onPress={this.navToSignUp} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps)(withNavigation(LaunchScreen));
