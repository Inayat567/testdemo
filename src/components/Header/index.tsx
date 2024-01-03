import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {HeaderProp} from '../../constants/types';

const Header = (props: HeaderProp) => {
  return (
    <View style={styles.header}>
      <Icon name="arrow-back" size={30} color="white" onPress={props.onPress} />
      <Text style={styles.headerTitle}>{props.title}</Text>
      {props.subtitile && (
        <Text style={styles.subTitle}>{props.subtitile}</Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: COLORS.PRIMARY,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  subTitle: {
    color: COLORS.WHITE,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.WHITE,
  },
});
