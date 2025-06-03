// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/login_bg.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>감정 치료 게임(가제)</Text>

        <Image
          source={require('../assets/rocket_icon.png')}
          style={styles.rocket}
        />

        <Text style={styles.label}>계정 생성</Text>
        <Text style={styles.subtext}>이메일을 작성해주세요</Text>

        <TextInput
          style={styles.input}
          placeholder="email@domain.com"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../assets/google_icon.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../assets/apple_icon.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By clicking continue, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    marginBottom: 30,
  },
  rocket: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subtext: {
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  continueBtn: {
    backgroundColor: 'black',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#888',
  },
  or: {
    color: 'white',
    marginHorizontal: 10,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: '100%',
    marginBottom: 12,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  terms: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#55aaff',
    textDecorationLine: 'underline',
  },
});