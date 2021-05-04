import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../hooks/theme';

import { ListItem, FirstItem, ItemImage, ItemTitle } from './styles';

const propTypes = {
  mix: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const MixListItem = ({ mix, isFirst }) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleItemPress() {
    navigate('MixInfo', { mix });
  }

  if (isFirst) {
    return (
      <FirstItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
        <ItemImage source={{ uri: mix.icon.url }} resizeMode="contain" />
        <ItemTitle color={colors.text}>
          {`${mix.essence1.name} com ${mix.essence2.name}`}
        </ItemTitle>
      </FirstItem>
    );
  }

  return (
    <ListItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
      <ItemImage source={{ uri: mix.icon.url }} resizeMode="contain" />
      <ItemTitle color={colors.text}>
        {`${mix.essence1.name} com ${mix.essence2.name}`}
      </ItemTitle>
    </ListItem>
  );
};

MixListItem.propTypes = propTypes;
MixListItem.defaultProps = defaultProps;

export default MixListItem;
