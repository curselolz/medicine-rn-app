import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import commonStyles from '../../Themes/styles';
import styles from '../Styles/PatientStyles/PatientStyles';
import PatientItem from './PatientItemScreen';
import colors from '../../Themes/Colors';

class PatientFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      refreshing: false,
    };
  }

  _searchInputText = (value) => {
    console.log(value);
    this.setState({ searchText: value });
    console.log('trigger input');
  }

  _refreshingStarted = () => {
    this.setState({ refreshing: true });
    console.log('new data');
    this.setState({ refreshing: false });
  }

  _renderItem = ({ item }) => (
    <PatientItem
      navigate={this.props.navigation.navigate}
      data={item}
    />
  )

  render() {
    const { searchText, refreshing } = this.state;
    console.log(this.props);
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
        <SafeAreaView>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-around',
          }}
          >
            <Text style={commonStyles.caption}>Patients</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddPatient')}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Icon name="plus-circle" size={25} color={colors.red} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.content}>
          <TextInput
            style={styles.inputSearch}
            onChangeText={this._searchInputText}
            value={searchText}
            placeholder="Search"
          />
          {data && data.length
            ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={item => this._renderItem(item)}
                style={{ marginTop: 20 }}
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

export default withNavigation(PatientFeed);
