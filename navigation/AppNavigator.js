// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import EmotionSelectScreen from '../components/EmotionSelectScreen';
import EmotionResultScreen from '../components/EmotionResultScreen';
import EmotionRecordScreen from '../components/EmotionRecordScreen';
import CustomizeScreen from '../components/CustomizeScreen';
import InventoryScreen from '../components/InventoryScreen';
import GuestbookScreen from '../components/GuestbookScreen';
import FriendChatScreen from '../components/FriendListScreen';
import PortalRoomScreen from '../screens/PortalRoomScreen';
import GameScreen from '../components/GameScreen';

import FriendListScreen from '../components/FriendListScreen'; 
import JoyPlanetScreen from '../screens/JoyPlanetScreen';
import EmotionPassportFlowScreen from '../components/EmotionPassportFlowScreen';
// import SadPlanetScreen from '../screens/SadPlanetScreen';
// import AngerPlanetScreen from '../screens/AngerPlanetScreen';
// import AnxietyPlanetScreen from '../screens/AnxietyPlanetScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EmotionSelect" component={EmotionSelectScreen} />
      <Stack.Screen name="EmotionResult" component={EmotionResultScreen} />
      <Stack.Screen name="EmotionRecord" component={EmotionRecordScreen} />
      <Stack.Screen name="Customize" component={CustomizeScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="Guestbook" component={GuestbookScreen} />
      <Stack.Screen name="FriendChat" component={FriendChatScreen} />
      {/* <Stack.Screen name="PortalRoom" component={PortalRoomScreen} /> */}
      <Stack.Screen name="Game" component={GameScreen} />

      <Stack.Screen name="FriendList" component={FriendListScreen} />
      <Stack.Screen name="JoyPlanet" component={JoyPlanetScreen} />
      <Stack.Screen name="EmotionPassportFlow" component={EmotionPassportFlowScreen} />
      {/* <Stack.Screen name="SadPlanet" component={SadPlanetScreen} />
      <Stack.Screen name="AngerPlanet" component={AngerPlanetScreen} />
      <Stack.Screen name="AnxietyPlanet" component={AnxietyPlanetScreen} /> */}
    </Stack.Navigator>
  );
}
