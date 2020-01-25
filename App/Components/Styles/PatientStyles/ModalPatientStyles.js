import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bgGreyModal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: width['80'],
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    height: 405,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
