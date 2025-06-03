import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const items = [
  { icon: require('../assets/icons/bulb.png'), label: '조명', amount: '00개' },
  { icon: require('../assets/icons/passport.png'), label: '여권', amount: '0개' },
  { icon: require('../assets/icons/visa.png'), label: '비자', amount: '0개' },
  { icon: require('../assets/icons/figure.png'), label: '피규어', amount: '0개' },
  { icon: require('../assets/icons/crystal.png'), label: '빛나는 결정', amount: '00개' },
];

export default function InventoryScreen() {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="white" />
        <Text style={styles.headerTitle}>인벤토리</Text>
        <Feather name="user" size={24} color="white" />
      </View>

      {/* 카테고리 필터 */}
      <View style={styles.tabRow}>
        <TabButton label="보유" selected />
        <TabButton label="상점" />
        <TabButton label="신상품" />
        <TabButton label="특가 할인" />
      </View>

      {/* 보유 재화 */}
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>현재 보유 재화</Text>
        <Text style={styles.balanceValue}>500 C</Text>
      </View>

      {/* 아이템 리스트 */}
      <ScrollView style={styles.itemBox}>
        <Text style={styles.itemTitle}>보유 아이템</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Image source={item.icon} style={styles.itemIcon} />
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.itemAmount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 하단 네비게이션 */}
      <View style={styles.navBar}>
        <Feather name="home" size={24} color="black" />
        <Feather name="search" size={24} color="#ccc" />
      </View>
    </View>
  );
}

function TabButton({ label, selected }) {
  return (
    <TouchableOpacity style={[styles.tabBtn, selected && styles.tabSelected]}>
      <Text style={[styles.tabText, selected && styles.tabTextSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7ff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#202840',
    padding: 12,
    borderRadius: 12,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  tabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  tabSelected: {
    backgroundColor: 'black',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  tabTextSelected: {
    color: 'white',
  },
  balanceBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  balanceLabel: {
    color: '#666',
    fontSize: 14,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 6,
  },
  itemBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 60,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  itemIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  itemLabel: {
    fontSize: 16,
    flex: 1,
  },
  itemAmount: {
    fontSize: 14,
    color: '#999',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
