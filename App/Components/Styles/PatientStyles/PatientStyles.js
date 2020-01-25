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
  inputSearch: {
    backgroundColor: colors.input,
    borderRadius: 25,
    width: width['80'],
    height: 44,
    marginTop: 25,
    paddingLeft: 15,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
