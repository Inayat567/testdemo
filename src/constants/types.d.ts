import {Dispatch, SetStateAction} from 'react';
import {ImageProps} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Bookmark: undefined;
  Notification: undefined;
  Setting: undefined;
  Employee: undefined;
  Feedback: undefined;
  Livelocation: undefined;
  Newtask: undefined;
  Pasttask: undefined;
  Progress: undefined;
  Taskstatus: undefined;
  Todaytask: undefined;
  Trackemployee: undefined;
};

export interface NavigationProps {
  navigation: NavigationScreenProp<any, any>;
}

export type HeaderProp = {
  title: string;
  subtitile?: string;
  onPress: Dispatch<SetStateAction<Any>>;
};

export type ButtonProp = {
  title?: string;
  onPress: Dispatch<SetStateAction<string>>;
};

export type SmallCardProps = {
  progress?: number;
  title: string;
};

export type headingProps = {
  heading: string;
  subHeading: string;
};

export type ExerciseProps = {
  heading: string;
  time: string;
  image?: ImageProps;
  name: string;
};

export type DayCardProps = {
  item: number;
  today: number;
  onPress: Dispatch<SetStateAction<number>>;
};

export type GridViewProps = {
  item: {
    name: string;
    image: ImageProps;
  };
  onPress: Dispatch<SetStateAction<string>>;
};
