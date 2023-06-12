import React, { useState } from "react";
import { Button, TextInput, FlatList, View, Text, Image } from "react-native";
import { styles } from "../App";

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
    <View>
      <TextInput
        style={styles.searchBar}
        value={currentQuery}
        onChangeText={(text) => {
          setCurrentQuery(text);
        }}
        placeholder="Enter a recipe to search here..."
      />
      <FlatList
        data={meals}
        renderItem={({ item }) => {
          if (item.type === "HTML") {
            return (
              <View>
                <Text>{item.name}</Text>
                {console.log(item.image)}
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 200, height: 200 }}
                ></Image>
              </View>
            );
          }
        }}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
