import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AppProvider from './src/hooks';
import AppStack from './src/routes/AppStack';

import { colors } from './src/styles';

// Set default screen background color
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => (
  <NavigationContainer theme={MyTheme}>
    <AppProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <AppStack />
    </AppProvider>
  </NavigationContainer>
);

export default App;
