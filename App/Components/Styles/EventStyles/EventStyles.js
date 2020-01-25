import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: width['80'],
    height: 92,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
