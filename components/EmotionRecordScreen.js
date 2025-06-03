import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function EmotionRecordScreen() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>감정 기록 일지</Text>

      {/* 날짜 텍스트 */}
      <Button
        mode="outlined"
        textColor="#6a1b9a"
        style={styles.dateDisplay}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.dateText}>{format(date, 'MMMM dd, yyyy', { locale: ko })}</Text>
      </Button>

      {/* 날짜 선택 모달 */}
      <DatePickerModal
        locale="ko"
        mode="single"
        visible={open}
        onDismiss={() => setOpen(false)}
        date={date}
        onConfirm={({ date }) => {
          setOpen(false);
          setDate(date);
        }}
        saveLabel="선택"
        label="날짜 선택"
        animationType="slide"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  dateDisplay: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    color: '#6a1b9a',
  },
});
