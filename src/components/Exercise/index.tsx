import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {ExerciseProps} from '../../constants/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Exercise = (props: ExerciseProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.time}>{props.time}</Text>
      </View>
      <View style={styles.imgCard}>
        <Image source={props.image} />
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => console.log('Clicked')}>
            <Icon name={props.name} color={COLORS.SECONDARY} size={30} />
          </TouchableOpacity>
          <Text>Play</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  card: {
    width: '50%',
    height: '90%',
    backgroundColor: COLORS.SECONDARY,
    margin: 5,
    borderRadius: 10,
  },
  imgCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginLeft: 10,
    marginTop: 10,
    width: '70%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: COLORS.WHITE,
    marginLeft: 10,
  },
});
