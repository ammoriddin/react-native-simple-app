import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MainScreen from '../screens/main-screen/main-screen'

const MainStack = createNativeStackNavigator()

const MainStackNavigater = () => {
  return (
    <MainStack.Navigator>
        <MainStack.Screen name='Mainpage' component={MainScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackNavigater