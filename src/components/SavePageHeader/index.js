import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import { colors } from '../../styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  onSave: PropTypes.func,
  saveButtonText: PropTypes.string,
};

const defaultProps = {
  onSave: null,
  saveButtonText: 'SALVAR',
};

const DrawerPageHeader = ({ title, onSave, navigation, saveButtonText }) => {
  function handleBackPress() {
    navigation.goBack();
  }

  function handleSavePress() {
    onSave();
  }

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={32}
        color={colors.systemText}
        style={styles.leftIcon}
        onPress={handleBackPress}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightIconContainer}>
        {onSave && (
          <Text style={styles.save} onPress={handleSavePress}>
            {saveButtonText}
          </Text>
        )}
      </View>
    </View>
  );
};

DrawerPageHeader.propTypes = propTypes;
DrawerPageHeader.defaultProps = defaultProps;

export default DrawerPageHeader;
