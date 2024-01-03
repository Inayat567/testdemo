import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants';
import {GridViewProps} from '../../constants/types';

const GridView = (props: GridViewProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.item.name)}>
      <Image source={props.item.image} />
      <Text style={{fontSize: 16, marginTop: 8}}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export default GridView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BG,
    height: 150,
    borderRadius: 10,
  },
});
