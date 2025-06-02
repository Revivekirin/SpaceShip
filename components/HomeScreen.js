import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 배경 영상 */}
      <Video
        source={require('../assets/bg_spaceship.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />

      {/* 버튼들 (핫스팟) */}
      <TouchableOpacity
        style={[styles.hotspot, { top: height * 0.4, left: width * 0.6 }]}
        onPress={() => navigation.navigate('EmotionRecord')}
      >
        <Text style={styles.hotspotText}>📒 감정 기록</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.hotspot, { top: height * 0.1, left: width * 0.5 }]}
        onPress={() => navigation.navigate('Game')}
      >
        <Text style={styles.hotspotText}>🎮 게임 시작</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.hotspot, { top: height * 0.6, left: width * 0.5 }]}
        onPress={() => navigation.navigate('PortalRoom')}
      >
        <Text style={styles.hotspotText}>🪐 감정 포탈</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  hotspot: {
    position: 'absolute',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  hotspotText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});
