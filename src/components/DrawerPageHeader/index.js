import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import { useNotifications } from '../../hooks/notifications';

import styles from './styles';
import { colors } from '../../styles';

const propTypes = {
  backButton: PropTypes.bool,
  notifications: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClickSearch: PropTypes.func,
  drawerNavigation: PropTypes.object,
};

const defaultProps = {
  backButton: false,
  notifications: true,
  onClickSearch: null,
  drawerNavigation: null,
};

function DrawerPageHeader({
  backButton,
  notifications,
  title,
  drawerNavigation,
  onClickSearch,
}) {
  const stackNavigation = useNavigation();
  const { unreadNotifications } = useNotifications();

  function handleBackPress() {
    stackNavigation.goBack();
  }

  function handleNotificationPress() {
    stackNavigation.navigate('Notifications');
  }

  function handleDrawerPress() {
    drawerNavigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      {backButton ? (
        <Icon
          name="chevron-left"
          size={32}
          color={colors.systemText}
          style={styles.leftIcon}
          onPress={handleBackPress}
        />
      ) : (
        <Icon
          name="menu"
          size={26}
          color={colors.systemText}
          style={styles.leftIcon}
          onPress={handleDrawerPress}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightIconContainer}>
        {onClickSearch && (
          <Icon
            name="search"
            size={26}
            color={colors.systemText}
            onPress={onClickSearch}
            style={styles.icon}
          />
        )}

        {notifications && (
          <View onTouchStart={handleNotificationPress}>
            <Icon
              name="bell"
              size={26}
              color={colors.systemText}
              style={styles.icon}
            />
            {unreadNotifications > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadNotifications}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

DrawerPageHeader.propTypes = propTypes;
DrawerPageHeader.defaultProps = defaultProps;

export default DrawerPageHeader;
