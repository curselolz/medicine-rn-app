import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  textWelcome: {
    fontSize: 32,
    color: colors.red,
    marginBottom: 48,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
