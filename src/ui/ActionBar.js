import { ActionBar, ActionBarItem } from '@apollosproject/ui-kit';
import { useNavigation } from '@react-navigation/native';
import { RockAuthedWebBrowser } from '@apollosproject/ui-connected';

const Toolbar = () => {
  const navigation = useNavigation();
  return (
    <RockAuthedWebBrowser>
      {(openUrl) => (
        <ActionBar>
          <ActionBarItem
            onPress={() => navigation.navigate('Passes')}
            icon="badge"
            label="Check-in"
          />
          <ActionBarItem
            onPress={() => openUrl('https://www.coe22.com/give')}
            icon="hands-heart"
            label="Give"
          />
          <ActionBarItem
            onPress={() => openUrl('https://www.coe22.com/serve')}
            icon="question"
            label="Serve"
          />
        </ActionBar>
      )}
    </RockAuthedWebBrowser>
  );
};

export default Toolbar;
