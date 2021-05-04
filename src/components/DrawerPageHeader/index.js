import { View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNotifications } from '../../hooks/notifications';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  RightIconContainer,
  Title,
  Badge,
  BadgeText,
} from './styles';

const propTypes = {
  backButton: PropTypes.bool,
  notifications: PropTypes.bool,
  toggleTheme: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClickSearch: PropTypes.func,
  drawerNavigation: PropTypes.object,
};

const defaultProps = {
  backButton: false,
  notifications: true,
  onClickSearch: null,
  drawerNavigation: null,
  toggleTheme: false,
};

function DrawerPageHeader({
  backButton,
  notifications,
  title,
  drawerNavigation,
  onClickSearch,
  toggleTheme,
}) {
  const { colors, isDarkTheme, setDarkTheme } = useTheme();
  const { unreadNotifications } = useNotifications();
  const stackNavigation = useNavigation();

  function handleBackPress() {
    if (stackNavigation.dangerouslyGetState().routes.length === 1) {
      stackNavigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'DrawerNavigation' }],
        }),
      );
    } else {
      stackNavigation.goBack();
    }
  }

  function handleNotificationPress() {
    stackNavigation.navigate('Notifications');
  }

  function handleDrawerPress() {
    drawerNavigation.openDrawer();
  }

  function handleToggleTheme() {
    AsyncStorage.setItem(
      '@Shishapedia:darkTheme',
      isDarkTheme ? 'false' : 'true',
    );
    setDarkTheme(!isDarkTheme);
  }

  return (
    <Container backgroundColor={colors.primaryColor}>
      {backButton ? (
        <Icon
          name="chevron-left"
          size={32}
          color={colors.systemText}
          style={{ marginRight: 30 }}
          onPress={handleBackPress}
        />
      ) : (
        <Icon
          name="menu"
          size={26}
          color={colors.systemText}
          style={{ marginRight: 30 }}
          onPress={handleDrawerPress}
        />
      )}
      <Title color={colors.systemText}>{title}</Title>
      <RightIconContainer>
        {onClickSearch && (
          <Icon
            name="search"
            size={26}
            color={colors.systemText}
            onPress={onClickSearch}
            style={{ marginLeft: 20 }}
          />
        )}
        {toggleTheme && (
          <Icon
            color="white"
            name={isDarkTheme ? 'sun' : 'moon'}
            size={24}
            onPress={handleToggleTheme}
          />
        )}

        {notifications && (
          <View onTouchStart={handleNotificationPress}>
            <Icon
              name="bell"
              size={26}
              color={colors.systemText}
              style={{ marginLeft: 20 }}
            />
            {unreadNotifications > 0 && (
              <Badge>
                <BadgeText>{unreadNotifications}</BadgeText>
              </Badge>
            )}
          </View>
        )}
      </RightIconContainer>
    </Container>
  );
}

DrawerPageHeader.propTypes = propTypes;
DrawerPageHeader.defaultProps = defaultProps;

export default DrawerPageHeader;
