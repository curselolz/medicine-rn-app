import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import images from '../../Themes/Images';
import styles from '../Styles/PatientStyles/PatientDetailScreenStyles';
import colors from '../../Themes/Colors';
import Button from '../../utils/Button.util';

class PatientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
    };
  }

  _navToResult = (type) => {
    const { navigation } = this.props;
    if (type === 'Result') {
      navigation.navigate('Result');
    } else {
      navigation.navigate('ModalPatient');
    }
  }

  _goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { data } = params;
    const { age, name } = data;
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => console.log('event')}
            style={{ paddingRight: 22 }}
          >
            <Icon name="calendar" size={25} color={colors.bgGreyModal} />
          </TouchableOpacity>
          <Image source={images.human} style={styles.humanIcon} />
          <TouchableOpacity
            onPress={() => console.log('message')}
            style={{ paddingLeft: 22 }}
          >
            <Icon name="envelope" size={25} color={colors.bgGreyModal} />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 24 }}>
          <Text>XX/XX/XXXX</Text>
        </View>
        <View style={styles.itemsRow}>
          <View style={styles.itemParametr}>
            <Text style={styles.itemParamertText}>35</Text>
            <Text style={styles.itemParamertTextUnderline}>Age</Text>
          </View>
          <View style={styles.itemParametr}>
            <Text style={styles.itemParamertText}>85</Text>
            <Text style={styles.itemParamertTextUnderline}>Weight</Text>
          </View>
          <View style={styles.itemParametr}>
            <Text style={styles.itemParamertText}>182</Text>
            <Text style={styles.itemParamertTextUnderline}>Height</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginTop: 32, marginBottom: 15 }}>Contacts</Text>
          <View style={styles.contactBlock}>
            <View style={styles.rowContact}>
              <Icon name="map-marker-alt" size={25} color={colors.red} />
              <Text>15-17 Railway Road, London</Text>
            </View>
            <View style={styles.rowContact}>
              <Icon name="phone" size={25} color={colors.red} />
              <Text>+44-78171234567</Text>
            </View>
            <View style={styles.rowContact}>
              <Icon name="envelope" size={25} color={colors.red} />
              <Text>sam.johnson@gmail.com</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ marginTop: 32, marginBottom: 14 }}>Case history</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <Icon name="file-pdf" size={25} color={colors.red} />
            <Text>file name</Text>
            <TouchableOpacity
              onPress={() => console.log('view')}
            >
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 34 }}>
          <Text>Analyzes</Text>
          <View style={{
            marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            <Icon name="file-pdf" size={25} color={colors.red} />
            <Text>file name</Text>
            <TouchableOpacity
              onPress={() => console.log('view')}
            >
              <Text>View</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            <Icon name="file-pdf" size={25} color={colors.red} />
            <Text>file name</Text>
            <TouchableOpacity
              onPress={() => console.log('view')}
            >
              <Text>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button redBtn onPress={() => this._navToResult('Result')} nameButton="Pass the scale" />
        <Button borderBtn transparentBtn onPress={() => this._navToResult('Modal')} nameButton="Result" />
      </ScrollView>
    );
  }
}

export default PatientDetail;
