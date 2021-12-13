import { View } from 'react-native';

import {
  TableView,
  Cell,
  CellIcon,
  CellText,
  Divider,
  Touchable,
  styled,
  PaddedView,
  H4,
} from '@apollosproject/ui-kit';
import { RockAuthedWebBrowser } from '@apollosproject/ui-connected';

const RowHeader = styled(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: theme.sizing.baseUnit,
}))(PaddedView);

const Name = styled({
  flexGrow: 1,
})(View);

const ActionTable = () => (
  <RockAuthedWebBrowser>
    {(openUrl) => (
      <View>
        <RowHeader>
          <Name>
            <H4>{'Connect'}</H4>
          </Name>
        </RowHeader>
        <TableView>
          <Touchable onPress={() => openUrl('https://coe22.com/connect')}>
            <Cell>
              <CellText>Connect with us</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable onPress={() => openUrl('https://coe22.com/care')}>
            <Cell>
              <CellText>I need prayer</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable onPress={() => openUrl('https://coe22.com/baptism')}>
            <Cell>
              <CellText>Get baptized</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable onPress={() => openUrl('https://coe22.com/care')}>
            <Cell>
              <CellText>Get care</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable onPress={() => openUrl('https://coe22.com/campuses')}>
            <Cell>
              <CellText>Our locations</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable>
          {/* <Divider />
          <Touchable
            onPress={() => openUrl('https://apollosrock.newspring.cc/page/233')}
          >
            <Cell>
              <CellText>Report an issue</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable> */}
        </TableView>
      </View>
    )}
  </RockAuthedWebBrowser>
);

const StyledActionTable = styled(({ theme }) => ({
  paddingBottom: theme.sizing.baseUnit * 100,
}))(ActionTable);

export default StyledActionTable;
