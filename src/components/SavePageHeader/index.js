import PropTypes from 'prop-types';

import { useTheme } from '../../hooks/theme';

import { Container, Title, LeftIcon, RightIconContainer, Save } from './styles';

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
  const { colors } = useTheme();
  function handleBackPress() {
    navigation.goBack();
  }

  function handleSavePress() {
    onSave();
  }

  return (
    <Container backgroundColor={colors.primaryColor}>
      <LeftIcon
        name="chevron-left"
        size={32}
        color={colors.systemText}
        onPress={handleBackPress}
      />
      <Title color={colors.systemText}>{title}</Title>
      <RightIconContainer>
        {onSave && (
          <Save color={colors.systemText} onPress={handleSavePress}>
            {saveButtonText}
          </Save>
        )}
      </RightIconContainer>
    </Container>
  );
};

DrawerPageHeader.propTypes = propTypes;
DrawerPageHeader.defaultProps = defaultProps;

export default DrawerPageHeader;
