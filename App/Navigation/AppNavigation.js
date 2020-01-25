import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import {
  Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import LaunchScreen from '../Containers/LaunchScreen';
import WelcomeScreen from '../Containers/WelcomeScreen';
import SignIn from '../Components/Auth/SignInScreen';
import SignUp from '../Components/Auth/SignUpScreen';
import ForgotPassword from '../Components/Auth/ForgotPasswordScreen';
import styles from './Styles/NavigationStyles';
import DetectComponent from '../Components/Patient/PatientFeedContainer';
import PatientFeed from '../Components/Patient/PatientFeedScreen';
import PatientDetails from '../Components/Patient/PatientDetailScreen';
import ResultScreen from '../Components/Patient/ResultPatientScreen';
import AddPatient from '../Components/Patient/AddPatientScreen';
import ModalPatient from '../Components/Patient/ModalPatientScreen';
import MessageFeed from '../Components/Message/MessageFeedScreen';
import MessageDetail from '../Components/Message/MessageDetailScreen';
import EventsFeed from '../Components/Events/EventsFeedScreen';
import EventDetail from '../Components/Events/EventDetailScreen';
import EventAdd from '../Components/Events/EventAddScreen';
import Settings from '../Components/SettingsScreen';
import colors from '../Themes/Colors';


const PatientNav = createStackNavigator({
  Feed: {
    screen: DetectComponent,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: PatientDetails,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.bg,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      title: navigation.state.params.title,
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={14} color="black" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => console.log('edit')}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      ),
    }),
  },
  AddPatient: {
    screen: AddPatient,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.bg,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      title: 'Add patient',
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={14} color="black" />
        </TouchableOpacity>
      ),
    }),
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.bg,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      title: 'CHA2-DS2-VASc',
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={14} color="black" />
        </TouchableOpacity>
      ),
    }),
  },
  ModalPatient: { screen: ModalPatient },
});

const EventsNav = createStackNavigator({
  EventsFeed: {
    screen: EventsFeed,
    navigationOptions: {
      header: null,
    },
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.bg,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={14} color="black" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => console.log('edit')}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      ),
    }),
  },
  EventAdd: {
    screen: EventAdd,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.bg,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      title: 'New event',
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={14} color="black" />
        </TouchableOpacity>
      ),
    }),
  },
});

const MessageNav = createStackNavigator({
  MessageFeed: { screen: MessageFeed },
  MessageDetails: { screen: MessageDetail },
}, { headerMode: 'none' });

const BottomMainNav = createBottomTabNavigator({
  Patients: {
    screen: PatientNav,
    navigationOptions: {
      headerMode: 'none',
      tabBarOptions: {
        activeTintColor: colors.red,
      },
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="users" size={25} color={tintColor} />
      ),
    },
  },
  Events: {
    screen: EventsNav,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: colors.red,
      },
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar" size={25} color={tintColor} />
      ),
    },
  },
  Message: {
    screen: MessageNav,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: colors.red,
      },
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="envelope" size={25} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: colors.red,
      },
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cog" size={25} color={tintColor} />
      ),
    },
  },
}, {
  headerMode: 'none',
});

const Auth = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      // header: props => <CustomHeader {...props} />,
      headerStyle: {
        backgroundColor: colors.red,
        borderWidth: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,

      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerTintColor: '#6200EE',
      headerBackTitle: <Text />,
      animationEnabled: true,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.red,
        borderWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerTintColor: 'white',
      headerBackTitle: <Text />,
      animationEnabled: true,
    },
  },
  ForgotPass: {
    screen: ForgotPassword,
    navigationOptions: {
      // header: props => <CustomHeader {...props} />,
      headerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.red,
        borderWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,

      },
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      shadowColor: 'transparent',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerTintColor: 'white',
      headerBackTitle: <Text />,
      animationEnabled: true,
    },
  },
}, {
  // headerMode: 'none',
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SignIn: { screen: Auth },
  main: { screen: BottomMainNav },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default createAppContainer(PrimaryNav);
