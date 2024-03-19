// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button, Image, Pressable } from "react-native";
// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [display, setDisplay] = useState(false)
//   function resetformData() {
//     setDisplay(false);
//     setEmail('');
//     setPassword('');
//   }

//   return (
//     <View style={Styles.container}>
//       <Image style={{ height: 35, width: "54%", marginBottom: 35 }} source={require("../assets/Facebook_logo__2023_.svg-removebg-preview.png")}></Image>
//       <TextInput placeholder="Enter email address" value={email} onChangeText={(text) => setEmail(text)} style={Styles.inputfield} />
//       <TextInput placeholder="Enter Password" value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={Styles.inputfield} />
//       <View style={{ marginBottom: 10, width: "70%", marginTop: 10 }}>
//         <Button title="login" onPress={() => props.navigation.navigate("home")} ></Button>
//       </View>
//       <View style={Styles.lastbutn}>
//         <Pressable onPress={() => resetformData()} >
//           <Text style={{marginRight:25}} >Forget Password?</Text>
//         </Pressable>
//         <Pressable onPress={() => props.navigation.navigate("signup")} >
//           <Text>Don't have account</Text>
//         </Pressable>
//       </View>
//       <View>
//         {
//           display ?
//             <View>
//               <Text>UserEmail is :{email}</Text>
//               <Text>UserPassword is :{password}</Text>

//             </View> : null
//         }
//       </View>
//     </View>

//   )
// }
// const Styles = StyleSheet.create({
//   textbox: {
//     marginTop: 900,
//     fontSize: 70,

//   },
//   inputfield: {
//     borderRadius: 5,
//     borderBottom: 2,
//     borderBottomColor: "blue",
//     borderBottomWidth: 1,
//     paddingLeft: 10,
//     backgroundColor: '#0101',
//     margin: 3,
//     width: "80%",
//     height: 42

//   },
//   container: {
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//   },
//   lastbutn:{
//       display:"flex",
//       flexDirection:"row",
//   }
// })

// export default Login


