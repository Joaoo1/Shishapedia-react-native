import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  color: 'white',
  width: 52,
  height: 65,
};

const News = ({ color, width, height }) => (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 17.402C0 34.17.01 34.844.186 35.703c.527 2.47 1.904 4.033 4.16 4.697.556.166 1.767.176 20.85.206 13.876.01 20.42-.01 20.761-.079.87-.185 1.67-.634 2.373-1.347.713-.723 1.074-1.367 1.406-2.54l.215-.751.03-14.825L50 6.25h-6.25V0H0v17.402zm40.645 1.905c.029 17.949-.02 16.562.664 17.636.156.254.293.489.293.508 0 .03-8.057.049-17.9.049-14.688 0-17.99-.02-18.409-.127-.986-.264-1.68-.986-2.012-2.11-.136-.478-.156-2.187-.156-16.337V3.125h37.5l.02 16.182z"
        fill={color}
      />
      <Path
        d="M6.25 10.938V12.5H37.5V9.375H6.25v1.563zM6.25 23.438v7.812h14.062V15.625H6.25v7.813zM23.438 17.188v1.562H37.5v-3.125H23.437v1.563zM23.438 23.438V25H37.5v-3.125H23.437v1.563zM23.438 29.688v1.562H34.374v-3.125H23.438v1.563z"
        fill={color}
      />
    </Svg>
  );

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;
