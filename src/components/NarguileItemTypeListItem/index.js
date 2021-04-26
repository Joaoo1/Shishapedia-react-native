import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const propTypes = {
  item: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const NarguileItemTypeListItem = ({ item, isFirst }) => {
  const Icon = item.icon;
  const { navigate } = useNavigation();

  function handleItemPress() {
    navigate('NarguileItems', { type: item });
  }

  return (
    <View
      style={isFirst ? [styles.listItem, styles.firstItem] : styles.listItem}
      onTouchEnd={handleItemPress}
    >
      <Icon color="#000000" width={42} height={42} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <MaterialIcon name="chevron-right" size={30} onPress={handleItemPress} />
    </View>
  );
};

NarguileItemTypeListItem.propTypes = propTypes;
NarguileItemTypeListItem.defaultProps = defaultProps;

export default NarguileItemTypeListItem;
