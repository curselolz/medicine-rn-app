import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Switch from 'react-native-switch-pro';
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../Themes/Images';
import styles from './Styles/SettingsStyle';
import Button from '../utils/Button.util';
import colors from '../Themes/Colors';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <Text style={styles.textCaption}>Settings</Text>
          </View>
        </SafeAreaView>
        <View style={{ marginTop: 32 }}>
          <Text style={{ marginBottom: 24 }}>Account</Text>
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() => console.log('profile')}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Profile</Text>
              <Icon name="chevron-right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 32 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Facebook</Text>
              <Icon name="chevron-right" size={14} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ marginBottom: 25 }}>Notification</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 19 }}>
            <Text>Notification</Text>
            <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click')} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 34 }}>
            <Text>App notification</Text>
            <Switch backgroundActive={colors.red} onSyncPress={value => console.log('click 2')} />
          </View>
        </View>
        <View>
          <Text style={{ marginBottom: 24 }}>More</Text>
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() => console.log('country')}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Language</Text>
              <Icon name="chevron-right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('country')}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Country</Text>
              <Icon name="chevron-right" size={14} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button redBtn nameButton="Logout" customStyle={{ marginBottom: 48 }} />
        </View>
      </View>
    );
  }
}

export default Settings;
