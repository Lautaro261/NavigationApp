/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = ()=> {

  const dimensions = useWindowDimensions();


  return (
    <Drawer.Navigator

    drawerContent={(props)=> <CustomDrawerContent {...props} />}

    screenOptions={{
      drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',


      headerShown:false,
      drawerActiveBackgroundColor: globalColors.primary,
      drawerActiveTintColor: globalColors.background,
      drawerInactiveTintColor: globalColors.primary,
      drawerItemStyle: {
        borderRadius: 100,
        paddingHorizontal: 20,
      },
    }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};


const CustomDrawerContent = (props: DrawerContentComponentProps)=>{

  return(
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
      }}/>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};
