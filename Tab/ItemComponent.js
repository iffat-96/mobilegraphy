import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";
import PropTypes from "prop-types";

export default class ItemComponent extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.itemsList}>
          {this.props.items.map((item, index) => {
            return (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require("../assets/insta-logo.png")} />
                    <Body>
                      <Text>Iffat</Text>
                    </Body>
                  </Left>
                </CardItem>
                <View key={index}>
                  <Image
                    source={{ uri: item.imgURL }}
                    style={styles.imageStyle}
                  />
                  <Text />
                  <Text style={styles.itemtext}>{item.description}</Text>
                  <Text />
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    paddingTop: 100,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  itemtext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  imageStyle: {
    height: 300,
    resizeMode: "cover"
  }
});
