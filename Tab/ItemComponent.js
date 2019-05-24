import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Component
} from "react-native";
import {
  Card,
  Container,
  Button,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Content,
  Item,
  Input,
  Right,
  Icon,
  Header,
  H1
} from "native-base";
import PropTypes from "prop-types";

export default class ItemComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      text: ""
      // active: "false"
    };
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  submit = () => {
    this.setState({
      comment: String(this.state.text)
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={{ paddingTop: 60, alignItems: "center" }}>
          <Image source={require("../assets/title.png")} />
        </View>

        <View style={styles.itemsList}>
          {this.props.items.map((item, index) => {
            return (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail
                      style={{ width: 50, height: 50 }}
                      source={require("../assets/insta-logo.png")}
                    />
                    <Body>
                      <Text>Username</Text>
                    </Body>
                  </Left>
                </CardItem>
                <View key={index}>
                  <Image
                    source={{ uri: item.imgURL }}
                    style={styles.imageStyle}
                  />
                  <CardItem style={{ height: 45 }}>
                    <Left>
                      <Button transparent>
                        <Icon name="heart-empty" style={{ color: "black" }} />
                      </Button>
                      <Button transparent>
                        <Icon name="chatbubbles" style={{ color: "black" }} />
                      </Button>
                      <Button transparent>
                        <Icon name="send" style={{ color: "black" }} />
                      </Button>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Text style={styles.itemText}>{item.description}</Text>
                  </CardItem>

                  <Content>
                    <Item>
                      <Input
                        placeholder="Comment"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Button>
                        <Icon
                          transparent
                          active
                          name="paper-plane"
                          onPress={this.submit}
                        />
                      </Button>
                    </Item>
                  </Content>
                  <Text> {this.state.comment}</Text>
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  itemText: {
    fontSize: 20,
    textAlign: "center"
  },
  imageStyle: {
    height: 300,
    resizeMode: "cover"
  }
});
