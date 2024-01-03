let darkMode = 1; // 0 when dark mode is on and can apply other color combinations

export const COLORS = {
  PRIMARY: '#5E3B63',
  SECONDARY: '#D26E25',
  BG: darkMode ? '#EFE2E1' : '',
  TEXT: darkMode ? '#000' : '',
  BORDER: darkMode ? 'darkgray' : '',
  BUTTON: darkMode ? 'lightgreen' : '',
  HEADING: darkMode ? 'gray' : '',
  RED: 'red',
  GREEN: 'green',
  GRAY: 'gray',
  WHITE: 'white',
};

export const mainMenus = [
  {
    name: 'Self Help Journal',
    image: require('../assets/images/journal.png'),
  },
  {name: 'Diary', image: require('../assets/images/diary.png')},
  {name: 'Workout', image: require('../assets/images/workout.png')},
  {name: 'Breath', image: require('../assets/images/breath.png')},
  {name: 'Mood Tracker', image: require('../assets/images/mood.png')},
  {name: 'Goals', image: require('../assets/images/goals.png')},
  {name: 'Help Line', image: require('../assets/images/help.png')},
  {name: 'My Progress', image: require('../assets/images/progress.png')},
];

export const dailyRouten = [
  {
    practice: 'RIGHT LUNG KNEE HOP',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'RIGHT LUNG KNEE HOP',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
  {
    practice: 'SCISSORS',
    time: '10-15 min',
    img: require('../assets/images/woman.png'),
  },
];

export const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
export const today = new Date().getDay();
