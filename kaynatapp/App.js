//import libraries to create components
import React from "react";
import {Text,StyleSheet, View } from "react-native";
//import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/FirstCahllenge";
import FlatLists from "./src/screens/FlatList";
import Images from "./src/screens/images";
import MyButton from "./src/screens/ButtonDemo";
import NetFlixCard from "./src/components/NetflixCard";
import DemoStyles from "./src/components/DemoStyles";
import ChallengeFlatList from "./src/components/ChallengeFlatList";
import CounterNumber from "./src/screens/CounterNumber"
//crete a component that return som jsx / simple function
const App = () =>{
 
 
  return(
    <View>
    {/* <FirstChallenge/> */}
    {/* <FlatLists/> */}
    {/* <Images/> */}
    {/* <MyButton/> */}
    {/* <NetFlixCard /> */}
    {/* <DemoStyles /> */}
    {/* <ChallengeFlatList/> */}
    <CounterNumber/>
    </View>
  );
};
//create a stylesheet to style the component

//export the file, so that we can use it elsewhere in our app
export default App;