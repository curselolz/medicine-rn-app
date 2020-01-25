import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../Themes/Colors';
import width from './width.util';

const Button = ({
  nameButton, redBtn, transparentBtn, borderBtn, customStyle, ...otherProps
}) => {
  const stylesDetect = redBtn ? styles.red : styles.btn;
  const stylesDetectText = redBtn ? styles.redText : styles.text;
  const stylesDetectBorder = borderBtn ? styles.border : '';
  const stylesDetectTransaparent = transparentBtn ? styles.transparent : styles.white;
  return (
    <TouchableOpacity
      style={[stylesDetectTransaparent, stylesDetect, stylesDetectBorder, customStyle]}
      {...otherProps}
    >
      <Text style={stylesDetectText}>{nameButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    width: width['80'],
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: colors.red,
  },
  red: {
    backgroundColor: colors.red,
    color: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.red,
    width: width['80'],
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  redText: {
    color: 'white',
    fontSize: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.red,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  white: {
    backgroundColor: 'white',
  },
});

Button.propTypes = {
  nameButton: PropTypes.string.isRequired,
};
