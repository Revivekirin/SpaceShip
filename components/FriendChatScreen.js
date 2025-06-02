import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function FriendChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromMe: true }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>채팅</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={[styles.message, item.fromMe ? styles.fromMe : styles.fromOther]}>{item.text}</Text>
        )}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ marginVertical: 20 }}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="메시지를 입력하세요"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.btn} onPress={sendMessage}>
        <Text style={styles.btnText}>전송</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 20 },
  title: { color: 'white', fontSize: 24, marginBottom: 10 },
  message: { padding: 10, borderRadius: 10, marginVertical: 5, maxWidth: '80%' },
  fromMe: { alignSelf: 'flex-end', backgroundColor: '#4a90e2', color: 'white' },
  fromOther: { alignSelf: 'flex-start', backgroundColor: '#777', color: 'white' },
  input: { backgroundColor: '#222', color: 'white', padding: 12, borderRadius: 10 },
  btn: { marginTop: 10, backgroundColor: '#444', padding: 14, borderRadius: 10 },
  btnText: { color: 'white', textAlign: 'center' },
});
