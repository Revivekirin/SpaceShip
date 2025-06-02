import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function PortalRoomScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/portal_room_bg.png')} // 배경 이미지 필요
      style={styles.container}
    >
      {/* 감정 행성 포탈 버튼 */}
      <View style={styles.planetRow}>
        <TouchableOpacity style={[styles.planet, { backgroundColor: '#f7d13d' }]} onPress={() => navigation.navigate('JoyPlanet')}>
          <Text style={styles.planetText}>😊 기쁨</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.planet, { backgroundColor: '#3d8ff7' }]} onPress={() => navigation.navigate('SadPlanet')}>
          <Text style={styles.planetText}>😢 슬픔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.planet, { backgroundColor: '#f73d3d' }]} onPress={() => navigation.navigate('AngerPlanet')}>
          <Text style={styles.planetText}>😡 분노</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.planet, { backgroundColor: '#9b59b6' }]} onPress={() => navigation.navigate('AnxietyPlanet')}>
          <Text style={styles.planetText}>😨 불안</Text>
        </TouchableOpacity>
      </View>

      {/* 좌우 패널 */}
      <TouchableOpacity style={[styles.panel, { left: 20 }]} onPress={() => navigation.navigate('EmotionRecord')}>
        <Text style={styles.panelText}>📒 감정 일기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.panel, { right: 20 }]} onPress={() => navigation.navigate('FriendList')}>
        <Text style={styles.panelText}>🛰 친구</Text>
      </TouchableOpacity>

      {/* 상단 미니맵 */}
      <View style={styles.miniMap}>
        <Text style={styles.miniText}>🌌 감정 여권: 😊😢😨</Text>
      </View>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠 홈</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Customize')}>
          <Text style={styles.navText}>🪐 커스터마이징</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Inventory')}>
          <Text style={styles.navText}>🎒 인벤토리</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  planetRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 120 },
  planet: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planetText: { color: 'white', fontWeight: 'bold' },
  panel: {
    position: 'absolute',
    top: height * 0.4,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 10,
  },
  panelText: { color: 'white', fontSize: 14 },
  miniMap: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 8,
    borderRadius: 10,
  },
  miniText: { color: 'white' },
  bottomBar: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navText: { color: 'white', fontSize: 16 },
});
