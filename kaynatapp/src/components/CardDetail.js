import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";
const CardDetail = ({textData,imgSrc}) =>{
    return( 

    <View style={styles.listStyle}>
    <Text style={styles.textStyle}>{textData}</Text>
    <Image style={styles.ImageStyle} source={imgSrc}/>
    </View>
);
};
const styles = StyleSheet.create({
    listStyle:{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
    textStyle: {
        fontSize: 30,
        margin:30,
    },
    ImageStyle:{
        width:300,
        height:300,
        // margin:30,
    }
});

export default CardDetail;
