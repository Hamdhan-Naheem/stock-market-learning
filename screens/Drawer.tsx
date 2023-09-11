import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import TabOneScreen from './TabOneScreen';

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

interface NavProps {
  signOut: () => void;
}

export default function Drawe({ signOut }: NavProps) {
  const logOut = React.useCallback(() => {
    signOut();
  }, [signOut]);

  const drawerContent = React.useCallback(
    (props: any) => <CustomDrawer signOut={logOut} {...props} />,
    [logOut],
  );
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={drawerContent}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HOME" component={TabOneScreen} />
    </Drawer.Navigator>
  );
}
