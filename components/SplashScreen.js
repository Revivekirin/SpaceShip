import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🪐 감정 탐험 앱</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOutline} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>게스트 체험</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', alignItems: 'center', justifyContent: 'center' },
  title: { color: 'white', fontSize: 26, marginBottom: 24 },
  btn: { backgroundColor: '#444', padding: 16, borderRadius: 10, marginBottom: 10 },
  btnOutline: { borderWidth: 1, borderColor: '#888', padding: 16, borderRadius: 10 },
  btnText: { color: 'white' },
});