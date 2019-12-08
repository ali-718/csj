import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";

export default class DataRender extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then(res => {
        res.forEach(item => {
          console.log(item.val());
          //   this.state.data.push(item);
          this.setState({
            data: [...this.state.data, item.val()]
          });
        });
      });
  }

  render() {
    return (
      <View style={{ marginTop: 25, width: "100%", flex: 1 }}>
        {/* {console.log(this.state)} */}
        {this.state.data.length > 0 ? (
          this.state.data.map(item => (
            <View style={{ marginTop: 20 }}>
              {console.log(item)}
              <Text>Name : {item.name}</Text>
              <Text>Age : {item.age}</Text>
            </View>
          ))
        ) : (
          <View>
            <Text>No data</Text>
          </View>
        )}
      </View>
    );
  }
}
