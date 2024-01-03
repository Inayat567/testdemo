import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {headingProps} from '../../constants/types';
import {COLORS} from '../../constants';

const Heading = (props: headingProps) => {
  return (
    <Text style={styles.container}>
      {props.heading} <Text style={styles.text}>{props.subHeading}</Text>
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    marginLeft: 20,
    marginVertical: 10,
    color: COLORS.PRIMARY,
  },
  text: {
    fontWeight: 'bold',
  },
});
