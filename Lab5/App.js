import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ActionScreen({ label, onPress }) {
  return (
    <View style={styles.screen}>
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <ActionScreen
      label="PROFILE"
      onPress={() => navigation.navigate('Profile')}
    />
  );
}

function Profile({ navigation }) {
  return (
    <ActionScreen
      label="GO BACK HOME"
      onPress={() => navigation.goBack()}
    />
  );
}

function About({ navigation }) {
  return (
    <ActionScreen
      label="GO BACK"
      onPress={() =>
        navigation.getParent().navigate('HomeMenu', { screen: 'Home' })
      }
    />
  );
}

const stackOptions = {
  headerTitleAlign: 'left',
  headerTitleStyle: { fontSize: 18, fontWeight: '600' },
  headerStyle: { backgroundColor: '#FFFFFF' },
  headerTintColor: '#111111',
  headerBackButtonDisplayMode: 'minimal',
  headerBackImage: ({ tintColor }) => (
    <Text style={[styles.backArrow, { color: tintColor }]}>←</Text>
  ),
};

const menuHeader = ({ navigation }) => ({
  headerLeft: () => (
    <DrawerToggleButton
      accessibilityLabel="Open navigation menu"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  ),
});

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="Home" component={Home} options={menuHeader} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="About" component={About} options={menuHeader} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerType: 'front',
            drawerStyle: { width: '70%' },
          }}
        >
          <Drawer.Screen
            name="HomeMenu"
            component={HomeStack}
            options={{ title: 'Home' }}
          />
          <Drawer.Screen
            name="AboutMenu"
            component={AboutStack}
            options={{ title: 'About' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  backArrow: {
    fontSize: 24,
    marginLeft: 12,
  },
  button: {
    backgroundColor: '#168DE2',
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 2,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
});