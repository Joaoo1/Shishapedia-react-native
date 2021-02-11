import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool,
  enabled: PropTypes.bool,
  size: PropTypes.number,
};

const defaultProps = {
  active: false,
  enabled: false,
  size: 24,
};

function Favorite({ active, size, enabled }) {
  return (
    <Svg
      width={size}
      height={size - 2}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.278 3.098C14.451 1.761 15.968 1 18.1 1 22.2 1 25 3.648 25 8.721c0 .099-.003.197-.006.295-.132 3.195-2.309 6.465-5.83 9.713a41.554 41.554 0 01-5.68 4.372l-.484.3-.485-.3-.011-.006-.026-.017-.098-.062a41.54 41.54 0 01-5.544-4.288c-3.52-3.247-5.698-6.517-5.83-9.712A7.2 7.2 0 011 8.721C1 3.648 3.798 1 7.9 1c2.133 0 3.65.76 4.822 2.098.069.079.168.203.278.347.11-.144.21-.268.278-.347z"
        fill={active ? '#FA3434' : 'transparent'}
        stroke={enabled ? '#FA3434' : 'lightgray'}
      />
    </Svg>
  );
}

Favorite.propTypes = propTypes;
Favorite.defaultProps = defaultProps;

export default Favorite;
