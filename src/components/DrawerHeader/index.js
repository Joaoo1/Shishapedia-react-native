import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const DrawerHeader = ({ children }) => (
  <Svg height={180} width="100%" style={styles.container}>
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#C2ABF7" stopOpacity="1" />
        <Stop offset="1" stopColor="#8257E5" stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Rect width="100%" height={180} fill="url(#grad)" />
    <View style={styles.info}>{children}</View>
  </Svg>
);

DrawerHeader.propTypes = propTypes;

export default DrawerHeader;
