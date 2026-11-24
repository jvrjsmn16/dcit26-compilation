import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.clickBtn} onPress={() => setIsOpen(true)}>
        <Text style={styles.clickLabel}>CLICK ME</Text>
      </TouchableOpacity>

      <SampleModal visible={isOpen} onClose={() => setIsOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F9FF',
  },
  clickBtn: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 20,
  },
  clickLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});