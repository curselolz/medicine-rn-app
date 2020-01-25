import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  item: {
    width: width['80'],
    height: 92,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: colors.red,
  },
  date: {
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
    marginRight: 15,
  },
});
