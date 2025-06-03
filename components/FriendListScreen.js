import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tabs = ['전체', '읽지 않음', '읽음', '중요 친구'];

const activities = [
  { id: 1, name: '친구1', time: '방금전', color: '#5D1919', message: '~~~~~', unread: true },
  { id: 2, name: '친구2', time: '5분전', color: '#1B1B3A', message: '~~~~~', unread: true },
  { id: 3, name: '친구3', time: '2d', color: '#00FF99', message: '좋아요 표시를 남겼습니다.', unread: false },
  { id: 4, name: '친구4', time: '3d', color: '#D1C914', message: '당신의 사진을 저장하였습니다.', unread: false },
  { id: 5, name: '친구5', time: '2d', color: '#E035B0', message: '~~~에 대한 답장:\n~~~~~', unread: false },
  { id: 6, name: '친구6', time: '5d', color: '#DDDDDD', message: '사진을 공유하였습니다.', unread: false },
  { id: 7, name: '친구7', time: '5d', color: '#FF3B57', message: '음성녹음이 전송되었습니다.', unread: false },
];

export default function FriendChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity</Text>

      {/* Tab Buttons */}
      <View style={styles.tabs}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tabBtn}>
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Activity List */}
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <View style={styles.content}>
              <Text style={styles.name}>{item.name} <Text style={styles.time}>{item.time}</Text></Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            {item.unread && <View style={styles.unreadDot} />}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: 'white', paddingHorizontal: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  tabs: { marginBottom: 20 },
  tabBtn: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginRight: 8,
  },
  tabText: { fontSize: 13, fontWeight: '600' },
  item: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 },
  dot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    marginTop: 6,
  },
  content: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 14 },
  time: { color: '#888', fontWeight: 'normal', fontSize: 12 },
  message: { fontSize: 13, marginTop: 2, color: '#333' },
  unreadDot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    alignSelf: 'center',
    marginLeft: 6,
  },
});
