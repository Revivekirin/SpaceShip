import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ChoiceBar from './ChoiceBar';

export default function EmotionRecordScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>감정 기록</Text>
      <Text style={styles.question}>😄 오늘 기분이 좋은 이유는?</Text>
      <Text style={styles.question}>✅ 무언가 성취한 것이 있나요?</Text>
      <Text style={styles.question}>📈 오늘 하루를 1~10으로 평가하면?</Text>

      <ChoiceBar
        choices={[
          { label: '뒤로', onPress: nav => nav.goBack() },
          { label: '기록 완료', onPress: nav => nav.navigate('EmotionResult') },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#0a0a0a', justifyContent: 'center' },
  title: { color: 'white', fontSize: 24, marginBottom: 20 },
  question: { color: 'white', fontSize: 18, marginVertical: 10 },
});
