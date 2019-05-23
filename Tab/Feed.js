import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import CardComponent from "../Screen/Card.js";
import ItemComponent from "./ItemComponent";
import { db } from "../Config";

console.disableYellowBox = true;

let itemsRef = db.ref("/items");

class FeedScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text />
        )}
      </View>
    );
  }
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  }
});
