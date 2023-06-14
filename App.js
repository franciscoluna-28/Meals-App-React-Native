import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <View className="my-12 mx-12 ">
      <Text className="font-bold py-4 text-3xl max-w-1/2">Find New Meals Here!</Text>
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
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  }})