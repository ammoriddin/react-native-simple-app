import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import LoginPage from '../screens/login-page/login-page'
import UserProfile from '../screens/user-profile/user-profile'
import MainScreen from '../screens/main-screen/main-screen'

const Drawer = createDrawerNavigator()

const DrawerNavigater = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen options={{title: 'Home Page'}} name='Home Page' component={MainScreen} />
        <Drawer.Screen options={{title: 'Login Page'}} name='Login Page' component={LoginPage} />
        <Drawer.Screen options={{title: 'User Profile'}} name='User Profile' component={UserProfile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigater