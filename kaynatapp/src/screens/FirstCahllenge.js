import React from "react";
import { View,Text,StyleSheet } from "react-native";
 const FirstChallenge = () =>
 {
    const yourName = "KaynatKhanYZ"
    return(
        <View>
            <Text style={styles.textStyleOne}>Welcome to kaynat channel</Text>
            <Text style={styles.textStyletwo}>Hey! subscribe my channel</Text>
            <Text>hi! My name is {yourName}</Text>
        </View>
    );
 };
 const styles = StyleSheet.create({
    textStyleOne:{
        // margin:100,
        fontSize :40,
        color:"red",
        fontWeight : "bold",
    },
    textStyletwo:{
        fontSize :30,
    },
 });
 export default FirstChallenge;