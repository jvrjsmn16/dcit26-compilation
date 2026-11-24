import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <Text style={styles.card}>
            <Text style={styles.number}>{index + 1}  </Text>
            {item}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, paddingTop: 50 },
  row: { flexDirection: 'row', marginBottom: 12 },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  button: {
    paddingHorizontal: 16,
    backgroundColor: '#0369A1',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
  card: {
    backgroundColor: '#0F172A',
    borderColor: '#00C8FF',
    borderWidth: 2,
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    color: '#FFFFFF',
    fontSize: 16,
  },
  number: { color: '#00C8FF', fontWeight: 'bold' },
});