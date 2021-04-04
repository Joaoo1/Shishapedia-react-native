import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

import { useEffect } from 'react';
import DrawerNavigation from './DrawerNavigation';

import Essences from '../pages/Essences';
import EssenceInfo from '../pages/EssenceInfo';
import EssenceReviews from '../pages/EssenceReviews';
import MixInfo from '../pages/MixInfo';
import Mixes from '../pages/Mixes';
import Notifications from '../pages/Notifications';
import NotificationInfo from '../pages/NotificationInfo';
import Under18 from '../pages/Under18';
import Unallowed from '../pages/Unallowed';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import SearchMixes from '../pages/SearchMixes';
import ForgotPassword from '../pages/ForgotPassword';
import CreateMix from '../pages/CreateMix';

const { Navigator, Screen } = createStackNavigator();
const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 500);
  }, []);
  return (
    <Navigator
      initialRouteName="Under18"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Mixes" component={Mixes} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Essences" component={Essences} />
      <Screen name="EssenceInfo" component={EssenceInfo} />
      <Screen name="EssenceReviews" component={EssenceReviews} />
      <Screen name="MixInfo" component={MixInfo} />
      <Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Screen name="Under18" component={Under18} />
      <Screen name="Unallowed" component={Unallowed} />
      <Screen name="Login" component={Login} />
      <Screen name="CreateUser" component={CreateUser} />
      <Screen name="SearchMixes" component={SearchMixes} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="NotificationInfo" component={NotificationInfo} />
      <Screen name="CreateMix" component={CreateMix} />
    </Navigator>
  );
};

export default Routes;
