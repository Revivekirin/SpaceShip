// components/ChoiceBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChoiceBar({ choices }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {choices.map((choice, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.button}
          onPress={() => {
            if (choice.onPress) {
              choice.onPress(navigation);
            }
          }}
        >
          <Text style={styles.text}>{choice.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
