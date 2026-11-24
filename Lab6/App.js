import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const products = [
  {
    key: '1',
    title: 'Xbox',
    description: 'A Microsoft console for gaming and streaming.',
    rating: '5/5',
  },
  {
    key: '2',
    title: 'PS5',
    description: 'A Sony console with fast loading and immersive games.',
    rating: '5/5',
  },
  {
    key: '3',
    title: 'Nintendo Switch',
    description: 'A console you can play handheld or connect to a TV.',
    rating: '4/5',
  },
];

function Home({ navigation }) {
  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={products}
      renderItem={({ item }) => (
        <Pressable
          accessibilityRole="button"
          style={styles.row}
          onPress={() => navigation.navigate('Product', { product: item })}
        >
          <Text>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}

function Product({ route }) {
  const { title, rating, description, key } = route.params.product;

  return (
    <View style={[styles.screen, styles.content]}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{description}</Text>
      <Text>Key: {key}</Text>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'left',
            headerTintColor: '#111111',
            headerBackButtonDisplayMode: 'minimal',
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  screen: { flex: 1, backgroundColor: '#F0F0F0' },
  content: { padding: 16 },
  row: {
    borderWidth: 1,
    borderColor: '#777777',
    padding: 10,
    marginBottom: 8,
  },
});