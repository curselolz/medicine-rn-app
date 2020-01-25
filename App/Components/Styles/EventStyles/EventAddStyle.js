import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 92,
    width: 92,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  itemTime: {
    height: 34,
    width: 107,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
});
