import React, { Component } from "react";
import { Text, View } from "react-native";
import "./config";
import * as firebase from "firebase";
import Sample from "../Sample";

export default class App extends Component {
  componentDidMount() {
    // firebase
    //   .database()
    //   .ref("users")
    //   .push({
    //     name: "ali haider",
    //     age: 21
    //   });
    // firebase
    //   .database()
    //   .ref("users")
    //   .child("-LuwBtyfReD0bvfrBz9N")
    //   .update({
    //     age: 25
    //   });
    // firebase
    //   .database()
    //   .ref("users")
    //   .child("-LuwBtyfReD0bvfrBz9N")
    //   .remove();
  }

  render() {
    return <Sample />;
  }
}
