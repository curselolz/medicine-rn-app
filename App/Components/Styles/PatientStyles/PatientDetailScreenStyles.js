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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  humanIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  itemParametr: {
    width: 105,
    height: 105,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemParamertText: {
    fontSize: 24,
    marginBottom: 10,
  },
  itemParamertTextUnderline: {
    fontSize: 16,
    color: colors.grey,
  },
  contactBlock: {
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  rowContact: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
