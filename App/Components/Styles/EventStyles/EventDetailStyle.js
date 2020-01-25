import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../Themes';
import colors from '../../../Themes/Colors';
import width from '../../../utils/width.util';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    width: width['80'],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContact: {
    flexDirection: 'row',
    marginTop: 15,
  },
  details: {
    width: width['80'],
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  patientItem: {
    width: width['80'],
    height: 92,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
