import { Text, View, Image, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../hooks/auth';

import FavoriteImg from '../../assets/images/ic_favorites.png';
import styles from './styles';

const propTypes = {
  category: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const MixCategoryListItem = ({ category, isFirst }) => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  function handleItemPress() {
    navigate('Mixes', { categoryId: category.id });
  }

  function handleFavoriteItemPress() {
    if (!user) {
      ToastAndroid.show(
        'Você precisa estar logado para ter favoritos',
        ToastAndroid.SHORT,
      );

      return;
    }

    navigate('Mixes', { userId: user.id, categoryId: category.id });
  }

  function renderFavoriteIcon() {
    return (
      <View
        style={[styles.listItem, styles.firstItem]}
        onTouchEnd={handleFavoriteItemPress}
      >
        <View style={styles.leftContainer}>
          <Image source={FavoriteImg} style={styles.itemImage} />
          <Text style={styles.itemTitle}>Favoritos</Text>
        </View>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </View>
    );
  }

  return (
    <>
      {isFirst && renderFavoriteIcon()}
      <View style={styles.listItem} onTouchEnd={handleItemPress}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: category.icon.url }} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{category.name}</Text>
        </View>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </View>
    </>
  );
};

MixCategoryListItem.propTypes = propTypes;
MixCategoryListItem.defaultProps = defaultProps;

export default MixCategoryListItem;
