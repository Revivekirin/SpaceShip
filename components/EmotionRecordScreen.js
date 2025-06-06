import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function EmotionRecordScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleDiaryClick = () => {
    if (showImage) {
      navigation.navigate('Home'); // 홈으로 이동
    } else {
      setShowImage(true); // 이미지 표시
    }
  };

  if (showImage) {
    return (
      <TouchableOpacity style={styles.fullScreen} onPress={handleDiaryClick}>
        <ImageBackground
          source={require('../assets/heart_result.png')} // 업로드된 이미지 파일명에 맞게 수정
          style={styles.fullScreen}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>감정 기록 일지</Text>

      <Button
        mode="outlined"
        textColor="#6a1b9a"
        style={styles.dateDisplay}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.dateText}>{format(date, 'MMMM dd, yyyy', { locale: ko })}</Text>
      </Button>

      <Button
        mode="contained"
        style={styles.writeButton}
        onPress={handleDiaryClick}
      >
        일기 쓰기
      </Button>

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
  writeButton: {
    marginTop: 10,
    backgroundColor: '#6a1b9a',
    paddingHorizontal: 20,
  },
  fullScreen: {
    width,
    height,
  },
});

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { format } from 'date-fns';
// import { ko } from 'date-fns/locale';

// export default function EmotionRecordScreen() {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>감정 기록 일지</Text>

//       {/* 날짜 텍스트 */}
//       <Button
//         mode="outlined"
//         textColor="#6a1b9a"
//         style={styles.dateDisplay}
//         onPress={() => setOpen(true)}
//       >
//         <Text style={styles.dateText}>{format(date, 'MMMM dd, yyyy', { locale: ko })}</Text>
//       </Button>

//       {/* 날짜 선택 모달 */}
//       <DatePickerModal
//         locale="ko"
//         mode="single"
//         visible={open}
//         onDismiss={() => setOpen(false)}
//         date={date}
//         onConfirm={({ date }) => {
//           setOpen(false);
//           setDate(date);
//         }}
//         saveLabel="선택"
//         label="날짜 선택"
//         animationType="slide"
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 80,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   dateDisplay: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     marginBottom: 20,
//   },
//   dateText: {
//     fontSize: 18,
//     color: '#6a1b9a',
//   },
// });
