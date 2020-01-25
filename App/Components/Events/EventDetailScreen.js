import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Styles/EventStyles/EventDetailStyle';
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

class EventDetail extends Component {
  _navBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const name = 'John';
    const age = 11;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <Text style={{ marginTop: 35, marginBottom: 17 }}>Details</Text>
              <View style={styles.details}>
                <View style={styles.rowContact}>
                  <Icon name="map-marker-alt" size={25} color={colors.red} />
                  <Text>15-17 Railway Road, London</Text>
                </View>
                <View style={styles.rowContact}>
                  <Icon name="calendar" size={25} color={colors.red} />
                  <Text>+44-78171234567</Text>
                </View>
                <View style={styles.rowContact}>
                  {/* <Icon name="ios-time" size={30} color="#4F8EF7" /> */}
                  <Icon name="clock" size={30} color={colors.red} />
                  <Text>sam.johnson@gmail.com</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 35, marginBottom: 14 }}>Patient</Text>
              <TouchableOpacity
                onPress={() => console.log('nav')}
              >
                <View style={styles.patientItem}>
                  <View style={{ marginLeft: 15 }}>
                    <Image source={images.humanSmall} />
                  </View>
                  <View style={{ marginLeft: 25, flexBasis: 200 }}>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                  </View>
                  <Icon name="chevron-right" size={15} color={colors.red} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 35 }}>
              <Text style={{ marginTop: 32 }}>Notes</Text>
              <View style={styles.patientItem}>
                <Text style={{ marginLeft: 16, marginRight: 16 }}>
                At the time of the examination of the complaint of: pain behind the sternum,
                feeling of pressure behind the sternum.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default EventDetail;
