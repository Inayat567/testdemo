import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {dailyRouten, today} from '../../constants';
import {Button, Heading, Exercise, Header} from '../../components';
import {NavigationProps} from '../../constants/types';

const Day = ({navigation}: NavigationProps) => {
  const handleStart = () => {
    console.log('Start button Clicked');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Workout"
        subtitile={`Day ${today.toString()}`}
        onPress={handleBack}
      />
      <Heading heading="Day" subHeading={today.toString()} />
      <FlatList
        data={dailyRouten}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <Exercise
              heading={item.practice}
              time={item.time}
              name="play"
              image={item.img}
            />
          );
        }}
      />
      <View style={{height: 80}}>
        <Button onPress={handleStart} />
      </View>
    </View>
  );
};

export default Day;
