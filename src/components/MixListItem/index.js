import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const propTypes = {
  mix: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const MixListItem = ({ mix, isFirst }) => {
  const { navigate } = useNavigation();

  function handleItemPress() {
    navigate('MixInfo', { mix });
  }

  return (
    <View
      style={isFirst ? [styles.listItem, styles.firstItem] : styles.listItem}
      onTouchEnd={handleItemPress}
    >
      <Image source={{ uri: mix.icon.url }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>
        {`${mix.essence1.name} com ${mix.essence2.name}`}
      </Text>
    </View>
  );
};

MixListItem.propTypes = propTypes;
MixListItem.defaultProps = defaultProps;

export default MixListItem;
