import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  essence: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const EssenceListItem = ({ essence, isFirst }) => {
  const { navigate } = useNavigation();

  function handleItemPress() {
    navigate('EssenceInfo', { essence });
  }

  return (
    <View
      style={isFirst ? [styles.listItem, styles.firstItem] : styles.listItem}
      onTouchEnd={handleItemPress}
    >
      <Image source={{ uri: essence.icon.url }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{essence.name}</Text>
    </View>
  );
};
EssenceListItem.propTypes = propTypes;
EssenceListItem.defaultProps = defaultProps;

export default EssenceListItem;
