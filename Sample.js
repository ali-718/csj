import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput
} from "react-native";

export default class Sample extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "orange"
        }}
      >
        <Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2019/11/26/17/48/girl-4655079_1280.jpg"
          }}
          style={{ width: 100, height: 50 }}
        />
        <TextInput
          style={{ marginTop: 20, width: "80%" }}
          placeholder="Email"
        />
        <TextInput
          style={{ marginTop: 20, width: "80%" }}
          placeholder="Password"
        />
        <View
          style={{
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red"
          }}
        >
          <Text>Login</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text>Dont have an account ?</Text>
          <Text style={{ color: "blue" }}>Signup</Text>
        </View>
      </SafeAreaView>
    );
  }
}
