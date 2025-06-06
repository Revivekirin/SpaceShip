// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// export default function PortalRoomScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/bg_spaceship.png')} // 배경 이미지
//         style={styles.background}
//         resizeMode="cover"
//       >
//         <View style={styles.hud}>
//           <TouchableOpacity
//             style={[styles.button, { top: 60, left: 30 }]}
//             onPress={() => navigation.navigate('EmotionPassportFlow')}
//           >
//             <Text style={styles.buttonText}>🛂 감정 여권</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, { top: 150, right: 30 }]}
//             onPress={() => navigation.navigate('EmotionRecord')}
//           >
//             <Text style={styles.buttonText}>📒 감정 일기</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, { bottom: 160, left: 30 }]}
//             onPress={() => navigation.navigate('FriendList')}
//           >
//             <Text style={styles.buttonText}>👥 친구</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, { bottom: 100, right: 30 }]}
//             onPress={() => navigation.navigate('Customize')}
//           >
//             <Text style={styles.buttonText}>🧑‍🚀 커스터마이징</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, { bottom: 30, left: 100 }]}
//             onPress={() => navigation.navigate('Inventory')}
//           >
//             <Text style={styles.buttonText}>🎒 인벤토리</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   background: {
//     flex: 1,
//     width: width,
//     height: height,
//   },
//   hud: {
//     flex: 1,
//     position: 'relative',
//     justifyContent: 'center',
//   },
//   button: {
//     position: 'absolute',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function PortalRoomScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg_spaceship.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.grid}>
            <GameButton label="Passport" onPress={() => navigation.navigate('EmotionPassportFlow')} />
            <GameButton label="Diary" onPress={() => navigation.navigate('EmotionRecord')} />
            <GameButton label="Friend" onPress={() => navigation.navigate('FriendList')} />
            <GameButton label="Customizing" onPress={() => navigation.navigate('Customize')} />
            <GameButton label="Inventory" onPress={() => navigation.navigate('Inventory')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function GameButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width,
    height,
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
