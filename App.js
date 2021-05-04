import 'react-native-gesture-handler';

import Navigation from './src/routes';
import AppProvider from './src/hooks';

const App = () => (
  <AppProvider>
    <Navigation />
  </AppProvider>
);

export default App;
