import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const emotionPlanets = [
  { name: '기쁨 (Joy)', color: '#f7d13d', route: 'JoyPlanet' },
  { name: '슬픔 (Sadness)', color: '#3d8ff7', route: 'SadPlanet' },
  { name: '분노 (Anger)', color: '#f73d3d', route: 'AngerPlanet' },
  { name: '불안 (Anxiety)', color: '#9b59b6', route: 'AnxietyPlanet' },
];

export default function PortalRoomScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/portal_room_bg.png')} // 배경 이미지 필요
      style={styles.container}
    >
      {/* 감정 행성 포탈 버튼 (세로 나열형) */}
      <ScrollView contentContainerStyle={styles.planetColumn}>
        {emotionPlanets.map((planet) => (
          <TouchableOpacity
            key={planet.name}
            style={[styles.planet, { backgroundColor: planet.color }]}
            onPress={() => navigation.navigate(planet.route)}
          >
            <Text style={styles.planetText}>{planet.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  planetColumn: {
    marginTop: 80,
    alignItems: 'center',
    gap: 16,
    paddingBottom: 150,
  },
  planet: {
    width: width * 0.6,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planetText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
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