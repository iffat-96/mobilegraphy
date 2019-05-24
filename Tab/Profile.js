import React from "react";
import { Text, View, Button, Image } from "react-native";
import { Icon } from "native-base";
import firebase from "firebase";

class ProfileScreen extends React.Component {
  state = {
    userID: "",
    imageURL: null,
    userName: ""
  };

  getuser = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        userID: user.uid,
        imageURL: user.photoURL,
        userName: user.displayName
      });
      console.log(this.state.userID);
    } else {
      console.log("no login user");
    }
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: this.state.imageURL }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{this.state.userName}</Text>

        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        <Button title="Show Profile" onPress={this.getuser} />
      </View>
    );
  }
}

export default ProfileScreen;
