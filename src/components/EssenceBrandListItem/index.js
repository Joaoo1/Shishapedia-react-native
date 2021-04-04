import { Text, View, Image, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../hooks/auth';

import FavoriteIcon from '../../assets/images/ic_favorites.png';
import styles from './styles';

const propTypes = {
  brand: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const EssenceBrandListItem = ({ brand, isFirst }) => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  function handleItemPress() {
    navigate('Essences', { brandId: brand.id });
  }

  function handleFavoriteItemPress() {
    if (!user) {
      ToastAndroid.show(
        'Você precisa estar logado para ter favoritos',
        ToastAndroid.SHORT,
      );

      return;
    }

    navigate('Essences', { userId: user.id });
  }

  function renderFavoriteItem() {
    return (
      <View
        style={[styles.listItem, styles.firstItem]}
        onTouchEnd={handleFavoriteItemPress}
      >
        <View style={styles.leftContainer}>
          <Image source={FavoriteIcon} style={styles.itemImage} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Favoritos</Text>
          </View>
        </View>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </View>
    );
  }
  return (
    <>
      {isFirst && renderFavoriteItem()}
      <View style={styles.listItem} onTouchEnd={handleItemPress}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: brand.icon.url }} style={styles.itemImage} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{brand.name}</Text>
            <Text style={styles.itemLabel}>
              {`${brand.totalEssences} Essências`}
            </Text>
          </View>
        </View>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </View>
    </>
  );
};

EssenceBrandListItem.propTypes = propTypes;
EssenceBrandListItem.defaultProps = defaultProps;

export default EssenceBrandListItem;
