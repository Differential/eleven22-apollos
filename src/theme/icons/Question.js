import PropTypes from 'prop-types';
import Svg, { Circle, Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 32, fill } = {}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    viewBox="0 0 256 256"
  >
    <Circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <Circle cx="128" cy="180" r="12" />
    <Path
      d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
