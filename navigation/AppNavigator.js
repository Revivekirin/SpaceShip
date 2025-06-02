import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../components/SplashScreen';
import HomeScreen from '../components/HomeScreen';
import EmotionSelectScreen from '../components/EmotionSelectScreen';
import EmotionResultScreen from '../components/EmotionResultScreen';
import EmotionRecordScreen from '../components/EmotionRecordScreen';
import CustomizeScreen from '../components/CustomizeScreen';
import InventoryScreen from '../components/InventoryScreen';
import GuestbookScreen from '../components/GuestbookScreen';
import FriendChatScreen from '../components/FriendChatScreen';
import GameScreen from '../components/GameScreen'; 
import PortalRoomScreen from '../screens/PortalRoomScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EmotionSelect" component={EmotionSelectScreen} />
      <Stack.Screen name="EmotionResult" component={EmotionResultScreen} />
      <Stack.Screen name="EmotionRecord" component={EmotionRecordScreen} />
      <Stack.Screen name="Customize" component={CustomizeScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="Guestbook" component={GuestbookScreen} />
      <Stack.Screen name="FriendChat" component={FriendChatScreen} />
      <Stack.Screen name="PortalRoom" component={PortalRoomScreen} />
      {/* <Stack.Screen name="FriendList" component={FriendListScreen} />
      <Stack.Screen name="JoyPlanet" component={JoyPlanetScreen} /> */}
      <Stack.Screen name="Game" component={GameScreen} /> 
    </Stack.Navigator>
  );
}