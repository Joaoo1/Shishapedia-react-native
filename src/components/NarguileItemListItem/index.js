import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  narguile: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const NarguileItemListItem = ({ narguile, isFirst }) => {
  const { navigate } = useNavigation();

  function handleItemPress() {
    navigate('NarguileInfo', { narguile });
  }

  return (
    <View
      style={isFirst ? [styles.listItem, styles.firstItem] : styles.listItem}
      onTouchEnd={handleItemPress}
    >
      <Image source={{ uri: narguile.icon.url }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{narguile.name}</Text>
    </View>
  );
};

NarguileItemListItem.propTypes = propTypes;
NarguileItemListItem.defaultProps = defaultProps;

export default NarguileItemListItem;
