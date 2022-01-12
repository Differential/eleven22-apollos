<svg
  width="256"
  height="256"
  viewBox="0 0 256 256"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_25_4)" />
  <defs>
    <clipPath id="clip0_25_4">
      <rect width="256" height="256" fill="white" />
    </clipPath>
  </defs>
</svg>;

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
  <Svg width={size} height={size} viewBox="0 0 256 256" {...otherProps}>
    <Path
      d="M241.876 256H14.13C6.32984 256 0 249.671 0 241.87V14.1225C0 6.31463 6.32984 -0.00725655 14.13 -0.00725655H241.876C249.685 -0.00725655 256.007 6.31463 256.007 14.1225V241.87C256.007 249.671 249.685 256 241.876 256ZM68.8035 121.18C62.5461 122.835 59.421 124.418 59.421 125.896V126.94C59.421 127.638 59.9355 127.992 60.9715 127.992C68.9725 130.876 72.9647 135.238 72.9647 141.087V147.376C73.2301 148.421 72.9647 153.747 72.9647 154.18V195.036C72.9647 200.723 72.0976 204.564 70.3533 206.573C60.2881 207.263 55.2442 208.493 55.2442 210.237V220.189L56.288 221.231H195.453L197.533 219.658C197.533 219.658 201.287 165.275 201.287 164.141C201.287 158.551 201.534 155.755 195.977 155.755C194.073 155.755 192.151 156.445 190.241 157.852C185.636 167.893 182.328 174.175 180.336 176.705C163.225 197.317 148.283 207.616 135.518 207.616H123.525C117.621 207.616 114.665 205.174 114.665 200.282V133.23H139.687C150.452 134.193 155.842 138.203 155.842 145.272V146.331C155.842 150.518 154.453 153.836 151.673 156.277C147.504 158.116 145.423 159.329 145.423 159.949V160.992C145.423 162.39 148.027 163.089 153.239 163.089H154.275L159.498 162.568C169.908 158.551 175.129 152.959 175.129 145.803V142.653C175.129 136.106 171.644 130.522 164.703 125.896C171.644 122.747 175.129 117.517 175.129 110.183V106.512C171.996 95.3378 164.871 89.7546 153.754 89.7546C148.196 90.0122 145.423 90.7112 145.423 91.8515V92.8961L146.982 94.4622C152.886 96.6471 155.842 100.319 155.842 105.468V107.565L154.798 111.749C152.365 116.986 147.504 119.614 140.202 119.614H114.665V46.2715H138.644C141.599 46.2715 143.856 46.6257 145.423 47.316C161.916 53.251 174.954 64.9555 184.512 82.4129C188.014 91.0638 189.984 94.993 194.932 94.993C200.491 94.993 200.015 93.884 200.015 89.3451V85.1031C200.015 83.5292 200.153 34.2218 200.153 34.2218C200.153 33.3461 199.101 32.823 197.019 32.654H106.326L106.142 32.6885H56.7947C55.4044 33.2989 54.7134 34.5197 54.7134 36.3508V42.1187C54.7134 44.5602 55.9183 45.781 58.3608 45.781H64.0881C70.0007 45.781 72.9569 48.5768 72.9569 54.1593V83.2721H72.9647V121.18H68.8035Z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;