/* eslint-disable react/prop-types */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../pages/Home';
import EssencesBrandsScreen from '../pages/EssencesBrands';
import MixCategoriesScreen from '../pages/MixCategories';
import NarguilesScreen from '../pages/Narguiles';
import NewsScreen from '../pages/News';

import NarguileIcon from '../assets/icons/Narguile';
import EssenceIcon from '../assets/icons/Essence';
import NewsIcon from '../assets/icons/News';
import { colors } from '../styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => (
  <Navigator
    initialRouteName="Home"
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      keyboardHidesTabBar: true,
      iconStyle: {
        flex: 0,
        width: 25,
        height: 25,
      },
      labelStyle: {
        fontFamily: 'Poppins-regular',
        fontSize: 14,
      },
      inactiveBackgroundColor: colors.primaryColor,
      activeBackgroundColor: colors.primaryColor,
      inactiveTintColor: '#fafafa',
      activeTintColor: colors.accentColor,
    }}
  >
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            name="home"
            size={size}
            color={focused ? colors.accentColor : color}
          />
        ),
      }}
    />
    <Screen
      name="EssenceBrands"
      component={EssencesBrandsScreen}
      options={{
        tabBarLabel: 'Essências',
        tabBarIcon: ({ color, size, focused }) => (
          <EssenceIcon
            height={+size}
            width={+size}
            color={focused ? colors.accentColor : color}
          />
        ),
      }}
    />
    <Screen
      name="MixesCategories"
      component={MixCategoriesScreen}
      options={{
        tabBarLabel: 'Mixes',
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            name="favorite"
            size={size}
            color={focused ? colors.accentColor : color}
          />
        ),
      }}
    />
    <Screen
      name="Narguiles"
      component={NarguilesScreen}
      options={{
        tabBarLabel: 'Narguiles',
        tabBarIcon: ({ color, size, focused }) => (
          <NarguileIcon
            height={+size}
            width={+size}
            color={focused ? colors.accentColor : color}
          />
        ),
      }}
    />
    <Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarLabel: 'Notícias',
        tabBarIcon: ({ color, size, focused }) => (
          <NewsIcon
            height={+size}
            width={+size}
            color={focused ? colors.accentColor : color}
          />
        ),
      }}
    />
  </Navigator>
);

export default BottomTabs;
