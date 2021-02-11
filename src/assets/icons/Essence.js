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

function Essence({ color, width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 52 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.573 1.563v60M50.011 3.56v57.638M1.107 60.51l8.659.873M1.03 3.25L9.92 2.02M2.544 3.138l.146 57.58M9.636 1.94l41.976 1.747M9.59 61.324l42.085-.363"
        stroke={color}
        strokeWidth={3}
      />
    </Svg>
  );
}

Essence.propTypes = propTypes;
Essence.defaultProps = defaultProps;

export default Essence;
