import React, { Component } from 'react';
import {
  View, Text, Modal, Alert,
} from 'react-native';
import styles from '../Styles/PatientStyles/ModalPatientStyles';
import Button from '../../utils/Button.util';
import width from '../../utils/width.util';

class ModalPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  _setModalVisible = () => {
    this.setState({ modalVisible: false });
    const { navigation } = this.props;
    navigation.navigate('Feed', { displayWelcome: false });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={[styles.container]}>
          <View style={styles.modal}>
            <Text style={{ marginBottom: 12 }}>
              Scored 5 points.
            </Text>
            <Text style={{ marginBottom: 12 }}>
              The expected frequency of strokes per year is 6.7%.
            </Text>
            <Text>
              Vitamin K (for example, warfarin) with a target INR 2.5 (2.0-3.0) is recommended.
            </Text>
            <Button
              onPress={this._setModalVisible}
              redBtn
              nameButton="Save"
              customStyle={{ width: width['70'], marginTop: 32 }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalPatient;
