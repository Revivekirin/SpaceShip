import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmotionResultScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>감정 히스토리 반영 완료!</Text>
      <View style={styles.stamp} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>홈으로 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', alignItems: 'center', justifyContent: 'center' },
  title: { color: 'white', fontSize: 22, marginBottom: 20 },
  stamp: { width: 100, height: 100, backgroundColor: 'gold', borderRadius: 50, marginBottom: 30 },
  btn: { backgroundColor: '#444', padding: 14, borderRadius: 10 },
  btnText: { color: 'white' },
});