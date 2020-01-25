import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingLeft: 25,
    paddingRight: 25,
  },
  text: {
    fontSize: 18,
  },
  textCaption: {
    fontSize: 34,
  },
});
