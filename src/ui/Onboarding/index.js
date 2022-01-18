import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  styled,
  named,
  BackgroundView,
  NavigationService,
} from '@apollosproject/ui-kit';
import { AnalyticsConsumer } from '@apollosproject/ui-analytics';

import {
  AskNotificationsConnected,
  FollowConnected,
  OnboardingSwiper,
  onboardingComplete,
  WITH_USER_ID,
  ONBOARDING_VERSION,
} from '@apollosproject/ui-onboarding';

import LocationFinder from './Slides/LocationFinder';

const OnboardingBackgroundView = named(
  'ui-onboarding.Onboarding.OnboardingBackgroundView'
)(BackgroundView);

const FullscreenBackgroundView = styled({
  position: 'absolute',
  width: '100%',
  height: '100%',
})(OnboardingBackgroundView);

export { ONBOARDING_VERSION };

function Onboarding(props) {
  const route = useRoute();
  const navigation = useNavigation();

  const userVersion = route?.params?.userVersion || props?.userVersion || 0;
  const slides = props?.slides || [
    LocationFinder,
    AskNotificationsConnected,
    FollowConnected,
  ];
  const { data, loading } = useQuery(WITH_USER_ID, {
    fetchPolicy: 'network-only',
  });
  if (loading) {
    return null;
  }
  return (
    <AnalyticsConsumer>
      {({ notify }) => (
        <>
          <FullscreenBackgroundView />
          <OnboardingSwiper
            userVersion={userVersion}
            onComplete={() => {
              onboardingComplete({
                userId: data?.currentUser?.id,
                version: ONBOARDING_VERSION,
                notify,
              });
              navigation.dispatch(
                NavigationService.resetAction({
                  navigatorName: 'Tabs',
                  routeName: 'Home',
                })
              );
            }}
          >
            {({ swipeForward }) => (
              <>
                {slides.map((Slide) => (
                  <Slide
                    key={Slide.displayName}
                    onPressPrimary={swipeForward}
                  />
                ))}
              </>
            )}
          </OnboardingSwiper>
        </>
      )}
    </AnalyticsConsumer>
  );
}

Onboarding.propTypes = {
  userVersion: PropTypes.number,
  slides: PropTypes.arrayOf(PropTypes.shape({})),
};

export default named('ui-onboarding.Onboarding')(Onboarding);
