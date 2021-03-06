import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { font, normalize } from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e2e2e3',
    paddingHorizontal: normalize(font),
  },
  radius: {
    margin: normalize(font),
    borderRadius: normalize(font * 2),
  },
  picker: {
    borderWidth: 1,
    borderColor: '#e2e2e3',
    borderRadius: normalize(font * 2),
  },
  pickerItem: {
    borderWidth: 1,
    borderColor: '#e2e2e3',
  },
});

export default function TypePicker({ type, setType, isForm }) {
  return (
    <View style={[styles.container, isForm || styles.radius]}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={type}
        onValueChange={value => setType(value)}>
        <Picker.Item value="" label="활동유형" />
        <Picker.Item value="mentoring" label="멘토링" />
        <Picker.Item value="study" label="스터디" />
        <Picker.Item value="conference" label="컨퍼런스" />
        <Picker.Item value="networking" label="네트워킹" />
        <Picker.Item value="lifestyle" label="라이프스타일" />
      </Picker>
    </View>
  );
}

TypePicker.defaultProps = {
  isForm: false,
};

TypePicker.propTypes = {
  isForm: PropTypes.bool,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};
