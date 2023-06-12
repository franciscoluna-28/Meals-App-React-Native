import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Recipe App</Text>
      <StatusBar style="auto" />
      <SearchBar/>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  searchBar: {
    borderWidth: 0.5,
    padding: 5,
    alignSelf: "stretch"
  }
});
