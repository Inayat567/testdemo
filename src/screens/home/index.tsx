import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {mainMenus} from '../../constants';
import {NavigationProps} from '../../constants/types';
import {GridView, Header} from '../../components';

const Home = ({navigation}: NavigationProps) => {
  const handleExit = () => {
    Alert.alert('Exit App', 'Do You want to exit app?', [
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
      {text: 'No'},
    ]);
  };

  const handleNavigation = (screen: string) => {
    if (screen === 'Workout') {
      navigation.navigate(screen);
    } else {
      ToastAndroid.show('Working...', 2000);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Mental Health" onPress={handleExit} />
      <FlatGrid
        itemDimension={150}
        data={mainMenus}
        renderItem={({item}) => (
          <GridView item={item} onPress={() => handleNavigation(item.name)} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
