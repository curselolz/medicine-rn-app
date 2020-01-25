import React, { Component } from 'react';
import WelcomeScreen from '../../Containers/WelcomeScreen';
import PatientFeed from './PatientFeedScreen';

const DetectComponent = ({ navigation }) => {
  // const { state } = navigation;
  // const { params } = state;
  // const { displayWelcome } = params;
  const { displayWelcome } = false;
  const component = displayWelcome ? <WelcomeScreen /> : <PatientFeed />;
  return (component);
};
export default DetectComponent;
