import { View, Text, StyleSheet, Image } from 'react-native';
import ChoiceBar from './ChoiceBar';

export default function CustomizeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>우주복 커스터마이징</Text>
      <Image source={require('../assets/character_placeholder.png')} style={styles.character} />

      <ChoiceBar
        choices={[
          { label: '홈으로', onPress: nav => nav.navigate('Home') },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  title: { color: 'white', fontSize: 22, marginVertical: 20 },
  character: { width: 240, height: 240, marginBottom: 20, resizeMode: 'contain' },
});