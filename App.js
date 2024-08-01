import Reac from 'react';
import MainScreen from './screens/main-screen/main-screen';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigater from './navigators/main-stack-navigater';

export default function App() {
  
  return (
    <NavigationContainer>
      <MainStackNavigater />
    </NavigationContainer>
  );
}