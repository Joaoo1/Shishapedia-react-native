import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';
import AppStack from './src/routes/AppStack';

import { colors } from './src/styles';

const App = () => (
  <NavigationContainer>
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
