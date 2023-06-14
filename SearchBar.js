import React, { useState } from "react";
import {
  Button,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./App";

const SearchBar = () => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/search?query=${currentQuery}&number=2&apiKey=d196ea0f35d648018bb4d84b9be15085`
      );
      const json = await response.json();
      setMeals(json.searchResults[2].results);
      console.log(meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("dismiss!");
        Keyboard.dismiss();
      }}
    >
      <ScrollView className="w-full h-full">
        <TextInput
          style={styles.searchBar}
          value={currentQuery}
          onChangeText={(text) => {
            setCurrentQuery(text);
          }}
          placeholder="Enter a recipe name to search here..."
          className="rounded-full p-4"
        />

        <ScrollView>
          <FlatList
            data={meals}
            className="flex p-4 h-full"
            renderItem={({ item }) => {
              if (item.type === "HTML") {
                return (
                  <View className="bg-white flex my-4 overflow-visible">
                    <View className="w-full overflow-hidden">
                      <Image
                        style={{
                          flex: 1,
                          resizeMode: "cover",
                          width: 265,
                          height: 160,
                        }}
                        source={{ uri: item.image }}
                        className="rounded-t-lg overflow-hidden"
                      ></Image>
                    </View>
                    <View
                      style={styles.card}
                      className="bg-white overflow-hidden shadow-2xl rounded-b-lg"
                    >
                      <Text className="font-bold pl-2 text-black py-4">
                        {item.name}
                      </Text>
                    </View>
                  </View>

                );
              }
            }}
          />
        </ScrollView>

        <TouchableHighlight
          underlayColor="#cc5050"
          className="z-50 rounded-lg py-4 bg-primary"
          activeOpacity={1}
          onPress={handleSearch}
        >
          <Text className="text-white text-center font-bold text-xl">
            Search Recipe
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
