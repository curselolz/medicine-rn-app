import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingLeft: 25,
    paddingRight: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
});
