import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SmallCardProps} from '../../constants/types';
import {COLORS} from '../../constants';

const SmallCard = (props: SmallCardProps) => {
  const AddSuffix = (num: number) => {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text>Days </Text>
        <Text>{props.title}</Text>
      </View>
      <Text style={styles.progressNumber}>
        {props.progress ? AddSuffix(props.progress) : 0}
      </Text>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.YELLOW,
    marginVertical: 10,
    marginLeft: 15,
    borderRadius: 10,
    padding: 12,
    height: '80%',
  },
  progressNumber: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
