import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/theme';

import { ListItem, FirstItem, ItemImage, ItemTitle } from './styles';

const propTypes = {
  narguile: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const NarguileItemListItem = ({ narguile, isFirst }) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleItemPress() {
    navigate('NarguileInfo', { narguile });
  }

  if (isFirst) {
    return (
      <FirstItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
        <ItemImage source={{ uri: narguile.icon.url }} resizeMode="contain" />
        <ItemTitle color={colors.text}>{narguile.name}</ItemTitle>
      </FirstItem>
    );
  }

  return (
    <ListItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
      <ItemImage source={{ uri: narguile.icon.url }} resizeMode="contain" />
      <ItemTitle color={colors.text}>{narguile.name}</ItemTitle>
    </ListItem>
  );
};

NarguileItemListItem.propTypes = propTypes;
NarguileItemListItem.defaultProps = defaultProps;

export default NarguileItemListItem;
