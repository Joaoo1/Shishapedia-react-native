import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: '#FFDD55',
  size: 24,
};

const Star = ({ active, color, size }) => (
  <Svg
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.278 1.035l2.777 6.914a1.3 1.3 0 001.099.811l7.256.603a.3.3 0 01.174.523l-5.569 4.941a1.3 1.3 0 00-.404 1.264l1.694 7.356a.3.3 0 01-.453.321l-6.157-3.895a1.3 1.3 0 00-1.39 0l-6.157 3.895a.3.3 0 01-.453-.32l1.694-7.357a1.3 1.3 0 00-.404-1.264l-5.57-4.94a.3.3 0 01.175-.524l7.256-.603a1.3 1.3 0 001.099-.81l2.777-6.915a.3.3 0 01.556 0z"
      fill={active ? color : 'none'}
      stroke={color}
    />
  </Svg>
);

Star.propTypes = propTypes;
Star.defaultProps = defaultProps;

export default Star;
