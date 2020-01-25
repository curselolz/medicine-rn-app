import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../Themes/Colors';

const Input = ({
  textContentType,
  colorInput,
  callbackChange,
  type,
  propsStyle,
  handleChange,
  placeholder,
  ...otherProps
}) => {
  handleChange = (value) => {
    if (callbackChange) {
      callbackChange(type, value);
    }
  };
  const detectColor = colorInput ? styles.colorGrey : styles.colorWhite;
  return (
    <TextInput
      textContentType={textContentType || 'none'}
      secureTextEntry={textContentType === 'password'}
      onChangeText={handleChange}
      style={[styles.input, propsStyle, detectColor]}
      placeholder={placeholder}
      placeholderTextColor={colorInput ? colors.inputColor : 'white'}
      {...otherProps}
    />
  );
};


const styles = StyleSheet.create({
  input: {
    width: 320,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  colorWhite: {
    color: 'white',
    borderColor: 'white',
  },
  colorGrey: {
    color: colors.inputColor,
    borderColor: colors.inputColor,
  },
});

Input.propTypes = {
  typeInput: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  typeInput: 'none',
  placeholder: '',
  handleChange: () => console.log('input handle'),
};

export default Input;
