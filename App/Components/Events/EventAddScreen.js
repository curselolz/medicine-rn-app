import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarPicker from 'react-native-calendar-picker';
import styles from '../Styles/EventStyles/EventAddStyle';
import images from '../../Themes/Images';
import Input from '../../utils/Input.util';
import Button from '../../utils/Button.util';
import colors from '../../Themes/Colors';

class EventAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datepick: '',
    };
  }

  _handleChange = (item, value) => {
    this.setState({ [item]: value });
  };

  _onDateChange = () => {
    console.log('date change');
  }

  _saveData = () => {
    console.log(this.state);
  }

  render() {
    const data = [{
      id: 1,
      name: 'Sam johnson',
    },
    {
      id: 2,
      name: 'San not Josnhosn',
    },
    {
      id: 3,
      name: 'Sam hello josnhon',
    }];
    const time = ['08:00', '09:00', '10:00', '08:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
    const today = new Date();
    const day = new Date().getDate();
    const customDatesStyles = [];
    customDatesStyles.push({
      date: new Date().getDate(),
      // Random colors
      style: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
      textStyle: { color: 'black' }, // sets the font color
      containerStyle: [], // extra styling for day container
    });
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            {data.map(el => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => console.log('click')}
              >
                <Image source={images.humanSmall} />
                <Text>{el.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <CalendarPicker
              weekdays={['M', 'T', 'W', 'F', 'T', 'S', 'S']}
              onDateChange={this._onDateChange}
              selectedDayColor={colors.red}
              todayTextStyle={{ color: 'white' }}
              todayBackgroundColor={{ backgroundColor: colors.red }}
              customDatesStyles={customDatesStyles}
            />
          </View>
          <View style={{
            justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap',
          }}
          >
            {time.map(el => <TouchableHighlight onPress={() => console.log('time press')} underlayColor={colors.red} style={styles.itemTime}><Text>{el}</Text></TouchableHighlight>)}
          </View>
          <View>
            <Text style={{ marginTop: 32, marginBottom: 10 }}>Notes</Text>
            <Input
              colorInput
              callbackChange={this._handleChange}
              type="note"
              textContentType="none"
              placeholder="Type a note..."
            />
          </View>
          <Button redBtn nameButton="Save" />
        </View>
      </ScrollView>
    );
  }
}

export default EventAdd;
