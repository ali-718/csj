import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import "./config";
import * as firebase from "firebase";
import DataRender from "./DataRender";

export default class App extends Component {
  state = {
    data: []
  };

  // NewPromise = () => {
  //   return new Promise((resolve, reject) => {
  //     name = "ali haider";

  //     if (name == "ali") {
  //       resolve("ali");
  //     } else {
  //       reject("it is not resolved");
  //     }
  //   });
  // };

  componentDidMount() {
    // this.NewPromise()
    //   .then(item => {
    //     console.log(item);
    //   })
    //   .catch(e => console.log(e));

    const myData = {
      name: "ali",
      age: 21,
      qualification: "Graduated"
    };

    const VisaApplication = {
      applied: "D - Visa",
      date: "20",
      duration: "2 years"
    };

    console.log({ myData, ...VisaApplication });

    //   firebase
    //     .database()
    //     .ref("users")
    //     .once("value")
    //     .then(item => {
    //       item.forEach(data => {
    //         this.setState({
    //           data: [...this.state.data, data.val()]
    //         });
    //       })
    //     });
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {console.log(this.state)}
        {this.state.data.length > 0
          ? this.state.data.map(item => {
              <View style={{ marginTop: 20 }}>
                <Text>Name : {item.name}</Text>
                <Text>Age : {item.age}</Text>
              </View>;
            })
          : null}
        <View style={{ width: "100%" }}></View>
      </View>
    );
  }
}
