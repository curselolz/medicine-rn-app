import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/EventStyles/EventItemStyle';
import colors from '../../Themes/Colors';

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _navToDetail = () => {
    const { navigate, data } = this.props;
    navigate('EventDetail', { data });
  }

  render() {
    const { data } = this.props;
    const { name, age } = data;
    return (
      <TouchableOpacity
        onPress={this._navToDetail}
      >
        <View style={styles.item}>
          <View style={{
            marginLeft: 25, marginRight: 25,
          }}
          >
            <Text>8</Text>
            <Text>MON</Text>
          </View>
          <View style={styles.line} />
          <View style={{ marginLeft: 25, flexBasis: 200 }}>
            <Text>{name}</Text>
            <Text>{age}</Text>
          </View>
          <Icon name="chevron-right" size={15} color={colors.red} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default EventItem;
