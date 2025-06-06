import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function EmotionPassportFlowScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0); // 0: 여권, 1: 감정 선택, 2: 결과

  const getImage = () => {
    switch (step) {
      case 0:
        return require('../assets/passport_image.png');
      case 1:
        return require('../assets/emotion_select.png');
      case 2:
        return require('../assets/joy_stamp_result.png');
      default:
        return null;
    }
  };

  const handlePress = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 2) {
      navigation.navigate('Home'); // 결과 후 홈으로 이동 등
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handlePress}
    >
      <ImageBackground
        source={getImage()}
        style={styles.background}
        resizeMode="cover"
      >
        {step === 1 && (
          <TouchableOpacity
            style={styles.joyButtonArea}
            onPress={() => setStep(2)}
          />
        )}
      </ImageBackground>
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
  },
  joyButtonArea: {
    position: 'absolute',
    width: 120,
    height: 120,
    bottom: 130,
    left: width / 2 - 60,
  },
});
