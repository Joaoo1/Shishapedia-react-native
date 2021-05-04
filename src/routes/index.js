import messaging from '@react-native-firebase/messaging';
import { Linking, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import changeNavigationBarColorfrom from 'react-native-navigation-bar-color';

import { useTheme } from '../hooks/theme';

import AppStack from './AppStack';

const linking = {
  prefixes: ['shishapedianotification://'],
  config: {
    screens: {
      Essences: {
        path: '/Essences/:brandId/:brandName',
        parse: {
          id: Number,
        },
      },
    },
  },
  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Check if there is an initial firebase notification
    const message = await messaging().getInitialNotification();

    // Get deep link from data
    // if this is undefined, the app will open the default/home page
    return message?.data?.url;
  },
  subscribe(listener) {
    const onReceiveURL = ({ url }) => listener(url);

    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);

    // Listen to firebase push notifications
    const unsubscribeNotification = messaging().onNotificationOpenedApp(
      (message) => {
        const url = message?.data?.url;

        if (url) {
          // Any custom logic to check whether the URL needs to be handled
          // Call the listener to let React Navigation handle the URL
          listener(url);
        }
      },
    );

    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL);
      unsubscribeNotification();
    };
  },
};

export default () => {
  const { colors, isDarkTheme } = useTheme();

  changeNavigationBarColorfrom(colors.primaryColor, false, false);

  const DarkTheme = {
    colors: {
      ...DefaultTheme,
      background: '#000000',
    },
  };

  const LightTheme = {
    colors: {
      ...DefaultTheme,
      background: '#ffffff',
    },
  };

  return (
    <NavigationContainer
      theme={isDarkTheme ? DarkTheme : LightTheme}
      linking={linking}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <AppStack />
    </NavigationContainer>
  );
};
