// JoyPlanetScreen.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');

export default function JoyPlanetScreen() {
  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/videos/joy.mp4')} 
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  video: { width: width, height: width * 0.5625 },
});
