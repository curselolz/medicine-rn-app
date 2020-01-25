import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.red,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
