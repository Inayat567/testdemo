import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {ButtonProp} from '../../constants/types';

const Button = (props: ButtonProp) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => props.onPress("")}>
        <Text style={styles.buttonText}>
          {props.title ? props.title : 'Start'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.SECONDARY,
    height: '80%',
    marginTop: 10,
  },
  buttonText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.WHITE,
  },
});
