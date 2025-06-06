import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import ChoiceBar from './ChoiceBar';

const { width, height } = Dimensions.get('window');

export default function CustomizeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/character_placeholder.png')} // 배경 이미지
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* <Text style={styles.title}>우주복 커스터마이징</Text>
        <Image
          source={require('../assets/character_placeholder.png')}
          style={styles.character}
        /> */}
        <ChoiceBar
          choices={[
            { label: '홈으로', onPress: nav => nav.navigate('Home') },
          ]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0,0,0,0.3)', // 내용 강조용 반투명 레이어
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginVertical: 20,
  },
  character: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
