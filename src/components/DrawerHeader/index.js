import { View } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

import styles from './styles';
import { useTheme } from '../../hooks/theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const DrawerHeader = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Svg height={180} width="100%" style={styles.container}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop
            offset="0"
            stopColor={colors.lightPrimaryColor}
            stopOpacity="1"
          />
          <Stop offset="1" stopColor={colors.primaryColor} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height={180} fill="url(#grad)" />
      <View style={styles.info}>{children}</View>
    </Svg>
  );
};

DrawerHeader.propTypes = propTypes;

export default DrawerHeader;
