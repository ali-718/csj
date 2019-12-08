import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import "./config";
import * as firebase from "firebase";
import DataRender from "./DataRender";

export default class App extends Component {
  state = {
    name: "",
    age: ""
  };

  componentDidMount() {
    // firebase
    //   .database()
    //   .ref("users")
    //   .push({
    //     name: "ali",
    //     age: 21
    //   });
    // firebase
    //   .database()
    //   .ref("users")
    //   .child("-Lv0FUMgjzC1O94UE5DW")
    //   .update({ age: 25 });
    // firebase
    //   .database()
    //   .ref("users")
    //   .child("-Lv0FUMgjzC1O94UE5DW")
    //   .remove();
  }

  Submit = () => {
    // alert(`my name is ${this.state.name} and my age is ${this.state.age}`);

    const Name = this.state.name != "" ? this.state.name.trim() : "";
    const Age = this.state.age != "" ? this.state.age.trim() : "";

    if (Name == "" && Age == "") {
      alert("please fill all fields");
    } else {
      firebase
        .database()
        .ref("users")
        .push({
          name: this.state.name,
          age: this.state.age
        });
    }
  };

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
        {/* <TextInput
          placeholder="Name"
          style={{
            width: "80%",
            borderStyle: "solid",
            borderColor: "red",
            // borderbotWidth: 2,
            paddingLeft: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            padding: 10,
            borderBottomWidth: 2
          }}
          placeholderTextColor="green"
          value={this.state.name}
          onChangeText={value => {
            this.setState({
              name: value
            });
          }}
        />
        <TextInput
          placeholder="Age"
          style={{
            width: "80%",
            borderStyle: "solid",
            borderColor: "red",
            // borderbotWidth: 2,
            paddingLeft: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            padding: 10,
            borderBottomWidth: 2,
            marginTop: 20
          }}
          placeholderTextColor="green"
          value={this.state.age}
          onChangeText={value => {
            this.setState({
              age: value
            });
          }}
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={() => this.Submit()}>
          <Text>Submit</Text>
        </TouchableOpacity>

        {console.log(this.state)} */}
        <DataRender />
      </View>
    );
  }
}
