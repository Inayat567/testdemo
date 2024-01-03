import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {days, today} from '../../constants';
import {NavigationProps} from '../../constants/types';
import {Button, Heading, SmallCard, DayCard, Header} from '../../components';

const Workout = ({navigation}: NavigationProps) => {
  const handleNavigation = (day: number) => {
    if (day === today) {
      navigation.navigate('Day');
    } else if (day < today) {
      ToastAndroid.show('you are Done', 2000);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleStart = () => {
    console.log('Start Button Clicked');
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Workout" onPress={handleBack} />
      <Heading heading="Level" subHeading="1" />
      <View>
        <FlatGrid
          itemDimension={60}
          data={days}
          renderItem={({item}) => (
            <DayCard
              item={item}
              today={today}
              onPress={() => handleNavigation(item)}
            />
          )}
        />
      </View>
      <Text style={styles.progressText}>Progress</Text>
      <View style={styles.progressContainer}>
        <SmallCard title="Completed" progress={6} />
        <SmallCard title="Remaining" progress={2} />
      </View>
      <View style={{flex: 0.5}}>
        <Button onPress={handleStart} />
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({
  progressContainer: {
    display: 'flex',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
