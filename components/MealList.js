import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import {useSelector} from 'react-redux';

const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFav
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
