import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from './BottomTabs';
import Profile from '../pages/Profile';
import Feedback from '../pages/Feedback';
import Help from '../pages/Help';

import DrawerContent from '../components/DrawerContent';

const { Navigator, Screen } = createDrawerNavigator();

const App = () => (
  <Navigator
    initialRouteName="BottomTabs"
    drawerContent={() => <DrawerContent />}
  >
    <Screen name="BottomTabs" component={BottomTabs} />
    <Screen name="Profile" component={Profile} />
    <Screen name="Feedback" component={Feedback} />
    <Screen name="Help" component={Help} />
  </Navigator>
);

export default App;
