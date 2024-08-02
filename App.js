import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigater from './navigators/drawer-navigator';

export default function App() {
  
  return (
    <NavigationContainer>
      <DrawerNavigater />
    </NavigationContainer>
  );
}