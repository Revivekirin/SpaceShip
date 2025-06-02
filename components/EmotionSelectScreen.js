import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmotionSelectScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>감정 여권 - 행성 선택</Text>
      {['기쁨의 별', '슬픔의 행성', '분노의 화성', '불안의 위성'].map((label, index) => (
        <TouchableOpacity
          key={index}
          style={styles.btn}
          onPress={() => navigation.navigate('EmotionRecord')}
        >
          <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', alignItems: 'center', justifyContent: 'center' },
  title: { color: 'white', fontSize: 22, marginBottom: 30 },
  btn: { backgroundColor: '#333', padding: 16, marginVertical: 10, borderRadius: 12 },
  btnText: { color: 'white' },
});