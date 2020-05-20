import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchbleComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchbleComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.grid}>
      <TouchbleComponent onPress={props.onSelect} style={{flex: 1}}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchbleComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    overflow: Platform.OS === 'android' && Platform.Version >= 21? 'hidden': 'visible'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: 'right'
  },
});

export default CategoryGridTile;
