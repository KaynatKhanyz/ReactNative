import React from "react";
import { View } from "react-native";
import CardDetail from "../components/CardDetail";
const Images = () =>{
    return(
        <View>
    <CardDetail  textData="thi is my first img" 
        imgSrc = {require("../../assets/test1.jpg")}
    />
    <CardDetail textData="thi is my first img" 
        imgSrc = {require("../../assets/test1.jpg")}/>
    <CardDetail textData="thi is my first img" 
        imgSrc = {require("../../assets/test1.jpg")}/>
    </View>
    );
};


export default Images;
