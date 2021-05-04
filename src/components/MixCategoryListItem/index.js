import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import FavoriteImg from '../../assets/images/ic_favorites.png';
import {
  ListItem,
  FirstItem,
  LeftContainer,
  ItemImage,
  ItemTitle,
} from './styles';

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
  const { colors } = useTheme();

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
      <FirstItem
        onTouchEnd={handleFavoriteItemPress}
        dividerColor={colors.listDivider}
      >
        <LeftContainer>
          <ItemImage source={FavoriteImg} resizeMode="contain" />
          <ItemTitle color={colors.text}>Favoritos</ItemTitle>
        </LeftContainer>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </FirstItem>
    );
  }

  return (
    <>
      {isFirst && renderFavoriteIcon()}
      <ListItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
        <LeftContainer>
          <ItemImage source={{ uri: category.icon.url }} resizeMode="contain" />
          <ItemTitle color={colors.text}>{category.name}</ItemTitle>
        </LeftContainer>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </ListItem>
    </>
  );
};

MixCategoryListItem.propTypes = propTypes;
MixCategoryListItem.defaultProps = defaultProps;

export default MixCategoryListItem;
