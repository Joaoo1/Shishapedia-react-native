import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { ListItem, FirstItem, ItemTitle } from './styles';
import { useTheme } from '../../hooks/theme';

const propTypes = {
  item: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
};

const NarguileItemTypeListItem = ({ item, isFirst }) => {
  const Icon = item.icon;
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleItemPress() {
    navigate('NarguileItems', { type: item });
  }

  if (isFirst) {
    return (
      <FirstItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
        <Icon
          color={colors.black}
          width={42}
          height={42}
          style={{ marginRight: 20 }}
        />
        <ItemTitle color={colors.text}>{item.name}</ItemTitle>
        <MaterialIcon
          name="chevron-right"
          size={30}
          onPress={handleItemPress}
          color={colors.black}
        />
      </FirstItem>
    );
  }

  return (
    <ListItem onTouchEnd={handleItemPress} dividerColor={colors.listDivider}>
      <Icon
        color={colors.black}
        width={42}
        height={42}
        style={{ marginRight: 20 }}
      />
      <ItemTitle color={colors.text}>{item.name}</ItemTitle>
      <MaterialIcon
        name="chevron-right"
        size={30}
        onPress={handleItemPress}
        color={colors.black}
      />
    </ListItem>
  );
};

NarguileItemTypeListItem.propTypes = propTypes;
NarguileItemTypeListItem.defaultProps = defaultProps;

export default NarguileItemTypeListItem;
