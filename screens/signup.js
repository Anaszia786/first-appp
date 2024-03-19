import axios from "axios";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, Button, Image, StyleSheet } from "react-native";

const Signup = (props) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    axios.post("https://49df-2407-d000-403-733a-24e6-8a98-16b-5e25.ngrok-free.app/login", data)
      .then((resp) => {
        console.log(resp.data); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={{ height: 35, width: "54%", marginBottom: 35 }} source={require("../assets/Facebook_logo__2023_.svg-removebg-preview.png")} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter email address"
            value={value}
            onChangeText={(text) => onChange(text)} // Fix here
            style={styles.inputfield}
            onBlur={onBlur}
          />
        )}
        name="email"
        rules={{ required: true }} // Example of validation rules
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Password"
            value={value}
            secureTextEntry={true}
            onChangeText={onChange}
            style={styles.inputfield}
            onBlur={onBlur}
          />
        )}
        name="password"
        rules={{ required: true }} // Example of validation rules
      />

      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Confirm Password"
            value={value}
            secureTextEntry={true}
            onChangeText={onChange}
            style={styles.inputfield}
            onBlur={onBlur}
          />
        )}
        name="confirmPassword"
        rules={{ required: true }} // Example of validation rules
      /> */}

      <View style={{ marginBottom: 10, width: "70%", marginTop: 10 }}>
        <Button title="signup" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputfield: {
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    paddingLeft: 10,
    backgroundColor: "#0101",
    margin: 3,
    width: "80%",
    height: 42,
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Signup;
