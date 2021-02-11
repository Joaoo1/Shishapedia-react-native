import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  color: '#ffffff',
  width: 52,
  height: 65,
};

function Narguile({ color, width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M50 15.278a4.14 4.14 0 00-1.427-3.115l-1.37-8.224a1.39 1.39 0 00-2.74 0l-1.37 8.224a4.14 4.14 0 00-1.427 3.115c0 1.572.885 2.927 2.174 3.636a2.761 2.761 0 00-.785 1.92c0 1.014.574 1.866 1.39 2.35v.854c-.816.485-1.39 1.336-1.39 2.35 0 1.016.574 1.867 1.39 2.352v32.371a2.78 2.78 0 01-2.779 2.778 2.78 2.78 0 01-2.777-2.778v-26.22a4.34 4.34 0 00-4.335-4.335c-1.156 0-2.244.45-3.066 1.269l-2.321 2.322-.407-.407c-.521-.52-1.443-.52-1.964 0l-3.976 3.977c-.355-.924-.598-1.885-.598-2.883v-.112c0-.767-.621-1.389-1.389-1.389V11.111h5.556a1.388 1.388 0 100-2.778h-3.556C24.165 6.856 25 4.92 25 2.778v-1.39C25 .622 24.379 0 23.611 0H9.722c-.767 0-1.389.621-1.389 1.389v1.389c0 2.142.835 4.078 2.168 5.555H6.944a1.388 1.388 0 100 2.778H12.5v22.222c-.768 0-1.389.733-1.389 1.5 0 2.648-1.313 5.157-3.6 6.885C2.808 45.272 0 49.925 0 54.167c0 5.42 3.043 9.277 8.345 11.168.032.74.63 1.332 1.377 1.332h13.89c.747 0 1.345-.592 1.377-1.332 5.301-1.89 8.344-5.749 8.344-11.168 0-3.811-2.28-7.948-6.153-11.328l4.358-4.357a1.388 1.388 0 000-1.964l-.407-.407 2.322-2.32c.908-.906 2.658-.173 2.658 1.1v26.22a5.562 5.562 0 005.556 5.556 5.562 5.562 0 005.555-5.556V28.74c.815-.485 1.39-1.336 1.39-2.351s-.575-1.866-1.39-2.351v-.854c.815-.485 1.39-1.336 1.39-2.35 0-.747-.304-1.42-.785-1.92C49.115 18.204 50 16.85 50 15.278z"
        fill={color}
      />
    </Svg>
  );
}

Narguile.propTypes = propTypes;
Narguile.defaultProps = defaultProps;

export default Narguile;
