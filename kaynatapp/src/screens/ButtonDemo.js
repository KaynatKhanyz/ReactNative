import React from "react";
import { Text,View,StyleSheet,Button, Alert, TouchableOpacity , Image} from "react-native";

const MyButton = () =>{
    return(
        <View>
        <Text style={styles.textStlye}>I'm button</Text>
    <Text style={styles.textStlye}>I'm button</Text>
    <Button
    disabled
        title="Join Now"
        onPress={()=>{
            // console.log("Welcome to button");
            Alert.alert("Button is pressed"); 
        }}
    />
    <TouchableOpacity
        onPress={()=>{
            // console.log("Welcome to button");
            Alert.alert("Button is pressed"); 
        }}>
        <Image style={styles.imgStyle} source={require("../../assets/test1.jpg")}/>
        <Text>Join Now</Text>  
        </TouchableOpacity>
        </View>
    );
};
const styles =StyleSheet.create({
    textStlye:{
        marginVertical: 200,
        textAlign:"center",
        fontSize:20,
    },
    imgStyle:{
        width:200,
        height:200,
    },
});
export default MyButton