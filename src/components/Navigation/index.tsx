import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Profile,
  Daak,
  Day,
  Home,
  Notification,
  Setting,
  Workout,
} from '../../screens';
import {View} from 'react-native';
import {COLORS} from '../../constants';
import {RootStackParamList} from '../../constants/types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Mental Health">
      <Stack.Screen
        name="Mental Health"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Day"
        component={Day}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const routes = [
    {name: 'Profile', component: Profile, icon: 'person-sharp'},
    {name: 'Bookmark', component: Daak, icon: 'bookmark-sharp'},
    {name: 'Home', component: StackNavigator, icon: 'shapes-sharp'},
    {name: 'Notification', component: Notification, icon: 'notifications'},
    {name: 'Setting', component: Setting, icon: 'settings-sharp'},
  ];

  return (
    <Tab.Navigator initialRouteName="Home">
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarShowLabel: false,
            tabBarItemStyle: {backgroundColor: COLORS.PRIMARY, marginTop: -5},
            headerStyle: {backgroundColor: COLORS.PRIMARY},
            headerTintColor: 'white',
            headerShown: route.name !== 'Home',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <View
                  style={{
                    marginTop: -15,
                    marginBottom: 20,
                    width: 45,
                    borderRadius: 15,
                    backgroundColor: 'white',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name={route.icon} color={color} size={35} />
                </View>
              ) : (
                <Icon name={route.icon} color={COLORS.WHITE} size={size} />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default RootNavigation;
