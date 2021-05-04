/* eslint-disable react/prop-types */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../pages/Home';
import EssencesBrandsScreen from '../pages/EssencesBrands';
import MixCategoriesScreen from '../pages/MixCategories';
import NarguilesScreen from '../pages/NarguileItemTypes';
import NewsScreen from '../pages/News';
import { useTheme } from '../hooks/theme';

import NarguileIcon from '../assets/icons/Narguile';
import EssenceIcon from '../assets/icons/Essence';
import NewsIcon from '../assets/icons/News';
import { fonts } from '../styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useTheme();

  return (
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
          fontFamily: fonts.regular,
          fontSize: fonts.tabBarLabelSize,
        },
        inactiveBackgroundColor: colors.primaryColor,
        activeBackgroundColor: colors.primaryColor,
        inactiveTintColor: colors.systemText,
        activeTintColor: colors.accentColor,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, focused }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? colors.accentColor : colors.systemText}
            />
          ),
        }}
      />
      <Screen
        name="EssenceBrands"
        component={EssencesBrandsScreen}
        options={{
          tabBarLabel: 'Essências',
          tabBarIcon: ({ size, focused }) => (
            <EssenceIcon
              height={+size}
              width={+size}
              color={focused ? colors.accentColor : colors.systemText}
            />
          ),
        }}
      />
      <Screen
        name="MixesCategories"
        component={MixCategoriesScreen}
        options={{
          tabBarLabel: 'Mixes',
          tabBarIcon: ({ size, focused }) => (
            <Icon
              name="favorite"
              size={size}
              color={focused ? colors.accentColor : colors.systemText}
            />
          ),
        }}
      />
      <Screen
        name="Narguiles"
        component={NarguilesScreen}
        options={{
          tabBarLabel: 'Narguiles',
          tabBarIcon: ({ size, focused }) => (
            <NarguileIcon
              height={+size}
              width={+size}
              color={focused ? colors.accentColor : colors.systemText}
            />
          ),
        }}
      />
      <Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Notícias',
          tabBarIcon: ({ size, focused }) => (
            <NewsIcon
              height={+size}
              width={+size}
              color={focused ? colors.accentColor : colors.systemText}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabs;
