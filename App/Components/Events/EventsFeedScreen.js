import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../../Themes/styles';
import styles from '../Styles/PatientStyles/PatientStyles';
import EventItem from './EventItem';
import colors from '../../Themes/Colors';

class EventFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      refreshing: false,
    };
  }

  _refreshingStarted = () => {
    this.setState({ refreshing: true });
    console.log('new data');
    this.setState({ refreshing: false });
  }

  _renderItem = ({ item }) => (
    <EventItem
      navigate={this.props.navigation.navigate}
      data={item}
    />
  )

  _navToAddScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('EventAdd');
  }

  render() {
    const { refreshing } = this.state;
    const data = [{
      name: 'Sam Jonson',
      age: 25,
    },
    {
      name: 'Jonson Sam',
      age: 15,
    },
    {
      name: 'Sam Not Jonson',
      age: 35,
    }];
    return (
      <View style={styles.container}>
        <View style={{
          marginTop: 55, flexDirection: 'row', justifyContent: 'space-around',
        }}
        >
          <Text style={commonStyles.caption}>Events</Text>
          <TouchableOpacity
            onPress={this._navToAddScreen}
          >
            <Icon name="plus-circle" size={25} color={colors.red} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {data && data.length
            ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={item => this._renderItem(item)}
                contentContainerStyle={{ paddingBottom: 50 }}
                refreshControl={(
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this._refreshingStarted}
                  />
              )}
              />
            )
            : <Text>No data here</Text>
          }
        </View>
      </View>
    );
  }
}

export default EventFeed;
