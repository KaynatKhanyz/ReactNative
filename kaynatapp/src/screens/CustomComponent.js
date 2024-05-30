//import libraries to create components
import React from "react";
import {Text,StyleSheet } from "react-native";
//crete a component that return som jsx / simple function
const CustomComponent = () =>{
  return(
    <Text style={styles.textStyle}>My custom components😊😊
    </Text>
  )
};
//create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle:{
    color:"red",
  },
});
//export the file, so that we can use it elsewhere in our app
export default CustomComponent;