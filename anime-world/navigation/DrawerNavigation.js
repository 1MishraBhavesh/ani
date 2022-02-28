import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./Stack";
import Settieg from "../screens/setting";
import LogOut from '../screens/logout'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Setting" component={Settieg} />
     <Drawer.Screen name="Log Out" component={LogOut} />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
