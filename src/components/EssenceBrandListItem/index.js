import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import FavoriteIcon from '../../assets/images/ic_favorites.png';
import {
  ListItem,
  FirstItem,
  LeftContainer,
  ItemImage,
  ItemTitle,
  ItemLabel,
  TextContainer,
} from './styles';

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
  const { colors } = useTheme();

  function handleItemPress() {
    navigate('Essences', { brandId: brand.id, brandName: brand.name });
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
      <FirstItem onTouchEnd={handleFavoriteItemPress}>
        <LeftContainer>
          <ItemImage source={FavoriteIcon} resizeMode="contain" />
          <TextContainer>
            <ItemTitle color={colors.text}>Favoritos</ItemTitle>
          </TextContainer>
        </LeftContainer>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </FirstItem>
    );
  }
  return (
    <>
      {isFirst && renderFavoriteItem()}
      <ListItem onTouchEnd={handleItemPress}>
        <LeftContainer>
          <ItemImage source={{ uri: brand.icon.url }} resizeMode="contain" />
          <TextContainer>
            <ItemTitle color={colors.text}>{brand.name}</ItemTitle>
            <ItemLabel>{`${brand.totalEssences} Essências`}</ItemLabel>
          </TextContainer>
        </LeftContainer>
        <Icon name="chevron-right" size={30} onPress={handleItemPress} />
      </ListItem>
    </>
  );
};

EssenceBrandListItem.propTypes = propTypes;
EssenceBrandListItem.defaultProps = defaultProps;

export default EssenceBrandListItem;
