import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/theme';

import { ListItem, FirstItem, ItemImage, ItemTitle } from './styles';

const propTypes = {
  essence: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const EssenceListItem = ({ essence, isFirst }) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleItemPress() {
    navigate('EssenceInfo', { essence });
  }

  if (isFirst) {
    return (
      <FirstItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
        <ItemImage source={{ uri: essence.icon.url }} resizeMode="contain" />
        <ItemTitle color={colors.text}>{essence.name}</ItemTitle>
      </FirstItem>
    );
  }

  return (
    <ListItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
      <ItemImage source={{ uri: essence.icon.url }} resizeMode="contain" />
      <ItemTitle color={colors.text}>{essence.name}</ItemTitle>
    </ListItem>
  );
};

EssenceListItem.propTypes = propTypes;
EssenceListItem.defaultProps = defaultProps;

export default EssenceListItem;
