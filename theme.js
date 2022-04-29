import ApollosConfig from '@apollosproject/config';
import { Text } from 'react-native';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';
import FRAGMENTS from '@apollosproject/ui-fragments';
import { makeIcon } from '@apollosproject/ui-kit';
import { ScriptureText, VerseNumber } from '@apollosproject/ui-scripture';

const THEME = {
  colors: {
    primary: '#952124',
    secondary: '#9A3434',
    tertiary: '#8E8E93',
  },
  typography: {
    sans: {
      regular: {
        default: 'Futura',
        italic: 'Futura-Italic',
      },
      medium: {
        default: 'Futura-Medium',
        italic: 'Futura-MediumItalic',
      },
      bold: {
        default: 'Futura-Bold',
        italic: 'Futura-BoldItalic',
      },
      black: {
        default: 'Futura-Bold',
        italic: 'Futura-BoldItalic',
      },
    },
    ui: {
      regular: 'System',
    },
  },
  overrides: {
    'ui-onboarding.Landing.BrandIcon': {
      name: 'letter-e', // Use this if we need to add a custom brand icon
    },
    'ui-onboarding.Landing': {
      description:
        'The Church of Eleven22 is a movement for all people to discover and deepen a relationship with Jesus Christ.',
    },
    'ui-onboarding.Landing.Subtitle': (theme) => ({
      color: theme.colors.text.primary,
    }),
    'ui-onboarding.Features': {
      description:
        "We'd like to help you personalize your profile to make the most of your online experience.",
    },
    'ui-onboarding.LocationFinder': {
      description:
        "We'll use your location to connect you with your nearby campus and community.",
    },
    'ui-onboarding.AskNotifications': {
      description:
        "We'll let you know when important things are happening and keep you in the loop.",
    },
    'ui-onboarding.Follow': {
      description: 'Follow others to stay up to date on your church community.',
    },
    'ui-onboarding.Entry': {
      authTitleTest: 'Have We Met?',
      description:
        'Sign in for a personalized experience as you discover and deepen your relationship with Jesus Christ',
    },
    'ui-auth.ProfileEntry': {
      prompt: 'Complete your profile to get connected!',
    },
    'ui-prayer.Confirmation': {
      body: () => (
        <Text>
          <ScriptureText>
            And this is the confidence that we have toward him, that if we ask
            anything according to his will he hears us.{'\n'}
            <VerseNumber>1 John 5:14</VerseNumber>
          </ScriptureText>
        </Text>
      ),
    },
    'ui-kit.ContentTitles': {
      onPressShare: () => null,
    },
    'ui-connected.ScriptureFeature': {
      showShareButton: false,
    },
  },
};

const ICONS = {
  Badge: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <Path
        d="M4.64329253,22.470655 C5.40870074,19.549624 8.22705562,17.4096358 11.573363,17.2410177 C9.24516524,17.0469717 7.41666667,15.2807046 7.41666667,13.1234867 C7.41666667,10.8360961 9.47249694,8.98826199 12,8.98826199 C14.5275031,8.98826199 16.5833333,10.8360961 16.5833333,13.1234867 C16.5833333,15.2807046 14.7548348,17.0469717 12.426637,17.2410177 C15.7729444,17.4096358 18.5912993,19.549624 19.3567075,22.470655 L19.5,22.470655 C19.9640393,22.470655 20.3333333,22.1387239 20.3333333,21.7372378 L20.3333333,5.25875745 C20.3333333,4.85727136 19.9640393,4.52534024 19.5,4.52534024 L15.3333333,4.52534024 L15.3333333,6.00777928 C15.3333333,6.84731319 14.5833392,7.52142757 13.6666667,7.52142757 L10.3333333,7.52142757 C9.4166608,7.52142757 8.66666667,6.84731319 8.66666667,6.00777928 L8.66666667,4.52534024 L4.5,4.52534024 C4.03596066,4.52534024 3.66666667,4.85727136 3.66666667,5.25875745 L3.66666667,21.7372378 C3.66666667,22.1387239 4.03596066,22.470655 4.5,22.470655 L4.64329253,22.470655 Z M6.37261175,22.470655 L17.6273882,22.470655 C16.8743074,20.2982572 14.618172,18.7595451 12,18.7595451 C9.381828,18.7595451 7.12569263,20.2982572 6.37261175,22.470655 Z M18.6785537,23.9999079 C18.6699091,24.000031 18.6612867,24.0000304 18.6526887,23.9999079 L5.347314,23.9999079 C5.33871329,24.0000304 5.33009085,24.000031 5.32144629,23.9999079 L4.5,23.9999079 C3.12309017,23.9999079 2,22.990445 2,21.7372378 L2,5.25875745 C2,4.0055502 3.12309017,2.99608733 4.5,2.99608733 L8.66671039,2.99608733 C8.67601342,1.33642636 10.1685892,-1.24344979e-14 12,-1.24344979e-14 C13.8314108,-1.24344979e-14 15.3239866,1.33642636 15.3332896,2.99608733 L19.5,2.99608733 C20.8769098,2.99608733 22,4.0055502 22,5.25875745 L22,21.7372378 C22,22.990445 20.8769098,23.9999079 19.5,23.9999079 L18.6785537,23.9999079 Z M10.3333333,5.99217466 L13.6666667,5.99217466 L13.6666667,3.01169195 C13.6666667,2.19653252 12.9242766,1.52925291 12,1.52925291 C11.0757234,1.52925291 10.3333333,2.19653252 10.3333333,3.01169195 L10.3333333,5.99217466 Z M12,15.7294585 C13.6146326,15.7294585 14.9166667,14.5591561 14.9166667,13.1234867 C14.9166667,11.6878173 13.6146326,10.5175149 12,10.5175149 C10.3853674,10.5175149 9.08333333,11.6878173 9.08333333,13.1234867 C9.08333333,14.5591561 10.3853674,15.7294585 12,15.7294585 Z"
        fill={fill}
      />
    </Svg>
  )),
  BrandIcon: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...otherProps}>
      <Path
        d="M241.876 256H14.13C6.32984 256 0 249.671 0 241.87V14.1225C0 6.31463 6.32984 -0.00725655 14.13 -0.00725655H241.876C249.685 -0.00725655 256.007 6.31463 256.007 14.1225V241.87C256.007 249.671 249.685 256 241.876 256ZM68.8035 121.18C62.5461 122.835 59.421 124.418 59.421 125.896V126.94C59.421 127.638 59.9355 127.992 60.9715 127.992C68.9725 130.876 72.9647 135.238 72.9647 141.087V147.376C73.2301 148.421 72.9647 153.747 72.9647 154.18V195.036C72.9647 200.723 72.0976 204.564 70.3533 206.573C60.2881 207.263 55.2442 208.493 55.2442 210.237V220.189L56.288 221.231H195.453L197.533 219.658C197.533 219.658 201.287 165.275 201.287 164.141C201.287 158.551 201.534 155.755 195.977 155.755C194.073 155.755 192.151 156.445 190.241 157.852C185.636 167.893 182.328 174.175 180.336 176.705C163.225 197.317 148.283 207.616 135.518 207.616H123.525C117.621 207.616 114.665 205.174 114.665 200.282V133.23H139.687C150.452 134.193 155.842 138.203 155.842 145.272V146.331C155.842 150.518 154.453 153.836 151.673 156.277C147.504 158.116 145.423 159.329 145.423 159.949V160.992C145.423 162.39 148.027 163.089 153.239 163.089H154.275L159.498 162.568C169.908 158.551 175.129 152.959 175.129 145.803V142.653C175.129 136.106 171.644 130.522 164.703 125.896C171.644 122.747 175.129 117.517 175.129 110.183V106.512C171.996 95.3378 164.871 89.7546 153.754 89.7546C148.196 90.0122 145.423 90.7112 145.423 91.8515V92.8961L146.982 94.4622C152.886 96.6471 155.842 100.319 155.842 105.468V107.565L154.798 111.749C152.365 116.986 147.504 119.614 140.202 119.614H114.665V46.2715H138.644C141.599 46.2715 143.856 46.6257 145.423 47.316C161.916 53.251 174.954 64.9555 184.512 82.4129C188.014 91.0638 189.984 94.993 194.932 94.993C200.491 94.993 200.015 93.884 200.015 89.3451V85.1031C200.015 83.5292 200.153 34.2218 200.153 34.2218C200.153 33.3461 199.101 32.823 197.019 32.654H106.326L106.142 32.6885H56.7947C55.4044 33.2989 54.7134 34.5197 54.7134 36.3508V42.1187C54.7134 44.5602 55.9183 45.781 58.3608 45.781H64.0881C70.0007 45.781 72.9569 48.5768 72.9569 54.1593V83.2721H72.9647V121.18H68.8035Z"
        fill={fill}
      />
    </Svg>
  )),
  CaretRight: makeIcon(({ size = 28, fill, ...otherProps } = {}) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={fill}
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Polyline
        points="96 48 176 128 96 208"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )),
  HandsHeart: makeIcon(({ size = 28, fill, ...otherProps } = {}) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.249 1.84362L16.7688 1.32455C17.7986 0.296232 19.2575 -0.174065 20.6912 0.058304C22.1268 0.290966 23.3651 1.20023 24.0183 2.50501C24.8955 4.25786 24.551 6.37601 23.1773 7.74759L16.7855 14.4082C16.4914 14.7147 16.0078 14.7148 15.7136 14.4083L9.33282 7.76089C7.94866 6.37756 7.60433 4.26008 8.48081 2.50686C9.13399 1.20223 10.3723 0.292964 11.8079 0.0603012C13.2416 -0.172068 14.7005 0.298229 15.7298 1.32604L16.249 1.84362ZM22.1166 6.66607C23.0339 5.75005 23.2606 4.35603 22.6824 3.20054C22.2483 2.33348 21.4202 1.72541 20.4558 1.56912C19.4897 1.41253 18.5077 1.72909 17.8182 2.4176L16.7742 3.46013C16.4829 3.75109 16.017 3.75132 15.7253 3.46065L14.6809 2.4196C13.9914 1.73108 13.0094 1.41453 12.0433 1.57111C11.0789 1.72741 10.2508 2.33548 9.81689 3.20213C9.23904 4.358 9.46571 5.75189 10.3936 6.6795L16.2495 12.7798L22.1166 6.66607ZM0.5 15.7456V14.2477C0.5 13.8253 0.835777 13.4828 1.24998 13.4828C1.66418 13.4828 1.99996 13.8253 1.99996 14.2477V14.9807H6.49982C8.30681 14.9807 9.81961 16.2641 10.1722 17.9765H13.2496C15.3171 17.9765 16.9995 19.6566 16.9995 21.7372C16.9995 22.1596 16.6637 22.5021 16.2495 22.5021H1.99996V23.2351C1.99996 23.6575 1.66418 24 1.24998 24C0.835777 24 0.5 23.6575 0.5 23.2351V21.7372V15.7456ZM1.99996 16.5105V20.9723H15.3637C15.0493 20.1185 14.2234 19.5063 13.2496 19.5063H9.49974H6.49982C6.08562 19.5063 5.74985 19.1639 5.74985 18.7414C5.74985 18.319 6.08562 17.9765 6.49982 17.9765H8.61389C8.29945 17.1227 7.47361 16.5105 6.49982 16.5105H1.99996Z"
        fill={fill}
      />
    </Svg>
  )),
  HandWaving: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 256 256"
    >
      <Path
        d="M119.99332,106.41921l-26-45.03332a20,20,0,0,1,34.641-20l40,69.282"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M89.35231,133.34742l-38-65.81793a20,20,0,1,1,34.641-20l34,58.88972"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M153.99332,165.30894a40,40,0,0,1,14.641-54.641l-10-17.32051a20,20,0,1,1,34.641-20l20,34.641a80,80,0,1,1-138.56406,80l-42-72.74613a20,20,0,0,1,34.641-20l22,38.10512"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M81.09415,240.0027A111.54975,111.54975,0,0,1,48,203.99065"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M176,31A51.97065,51.97065,0,0,1,221.0258,57.00434"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )),
  House: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M216,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V216"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="16"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M151.99414,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )),
  NextSteps: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 256 256"
    >
      <Polyline
        points="232.002 56 136.002 152 96.002 112 24.002 184"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Polyline
        points="232.002 120 232.002 56 168.002 56"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )),
  Question: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
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
  )),
  WatchVideo: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M22.3125 22.5236C16.7873 23.1287 11.2126 23.1287 5.68748 22.5236C4.72805 22.4138 3.78704 21.5236 3.63425 20.5625C2.96518 16.213 2.96518 11.7869 3.63425 7.43745C3.78709 6.47631 4.728 5.58619 5.68748 5.47626C11.2126 4.8712 16.7873 4.8712 22.3125 5.47626C23.2717 5.58622 24.2131 6.47623 24.3657 7.43745C25.0348 11.7869 25.0348 16.213 24.3657 20.5625C24.213 21.5236 23.2721 22.4138 22.3125 22.5236Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 14L12.25 10.5V17.5L17.5 14Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )),
};

ApollosConfig.loadJs({ FRAGMENTS, THEME, ICONS });
