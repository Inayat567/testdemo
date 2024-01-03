import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {DayCardProps} from '../../constants/types';

const DayCard = (props: DayCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            props.item < props.today
              ? COLORS.PRIMARY
              : props.item === props.today
              ? COLORS.SECONDARY
              : 'white',
        },
      ]}
      onPress={() => props.onPress(props.item)}>
      <Text
        style={[
          styles.day,
          {
            color: props.item < props.today ? 'white' : 'black',
          },
        ]}>
        {props.item}
      </Text>
      <Text style={{color: props.item < props.today ? 'white' : 'black'}}>
        Day
      </Text>
    </TouchableOpacity>
  );
};

export default DayCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
  },
  day: {
    fontSize: 16,
    marginTop: 8,
  },
});
