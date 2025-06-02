import { View, Text, FlatList, StyleSheet } from 'react-native';
import ChoiceBar from './ChoiceBar';

const items = Array.from({ length: 20 }, (_, i) => ({ id: i, name: `아이템 ${i + 1}` }));

export default function InventoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>인벤토리</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}><Text style={styles.itemText}>{item.name}</Text></View>
        )}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      <ChoiceBar
        choices={[
          { label: '홈으로', onPress: nav => nav.navigate('Home') },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 20 },
  title: { color: 'white', fontSize: 24, marginBottom: 20 },
  grid: { alignItems: 'center' },
  item: { backgroundColor: '#222', padding: 16, margin: 10, borderRadius: 10, width: 150, alignItems: 'center' },
  itemText: { color: 'white' },
});
