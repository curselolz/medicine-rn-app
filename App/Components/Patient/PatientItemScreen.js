import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/PatientStyles/PatientDetailStyles';
import colors from '../../Themes/Colors';
import images from '../../Themes/Images';

class PatientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _navToDetail = (data) => {
    const { navigate } = this.props;
    console.log(data);
    navigate('Details', { data, title: data.name });
  }

  render() {
    const { data } = this.props;
    const { name, age } = data;
    return (
      <TouchableOpacity
        onPress={() => this._navToDetail(data)}
      >
        <View style={styles.item}>
          <View>
            <Image source={images.humanSmall} />
          </View>
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

export default PatientItem;
