import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import ChoiceBar from './ChoiceBar';

export default function GuestbookScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const addMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>방명록</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>📩 {item}</Text>}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ marginVertical: 20 }}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="메시지를 남겨보세요"
        placeholderTextColor="#aaa"
      />

      <ChoiceBar
        choices={[
          { label: '작성', onPress: () => addMessage() },
          { label: '홈으로', onPress: nav => nav.navigate('Home') },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 20 },
  title: { color: 'white', fontSize: 24, marginBottom: 10 },
  message: { color: 'white', paddingVertical: 4 },
  input: { backgroundColor: '#222', color: 'white', padding: 12, borderRadius: 10 },
});
