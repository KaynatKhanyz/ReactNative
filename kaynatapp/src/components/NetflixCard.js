import React from "react";
import {View,Text,Image, StyleSheet, Button,Linking} from "react-native";


const NetFlixCard = ()=>{
   
    return(
        <View style={styles.container}>
            <Text style={styles.header}>NetFlix Card</Text>
            <View style={styles.poster}>
                <Image
                style ={styles.imgStyle}
                 source={{uri:"https://www.pinkvilla.com/pics/855x855/1848126976_all-of-us-are-dead_202403.jpg"}} 

                 />

            
            <View style={styles.poster_info}>
                <Text style={styles.poster_title}>All of us are Dead</Text>
                <Text style={styles.poster_text}>All of Us are Dead is a zombie apocalypse series. The second season is in the making and is expected to be released soon. It tells the story of a high school where there is a zombie virus breakout and the students are locked inside. They fight to either survive or turn into a zombie. As fans eagerly wait for the second season, here are shows like All of Us Are Dead to add to your watch list. </Text>

                 </View>
                 <Button title="Watch Now"
                    onPress={()=> Linking.openURL("https://www.pinkvilla.com/entertainment/10-must-watch-shows-like-all-of-us-are-dead-1288700")}
                 />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        padding:50,
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        color: "rgb(255,0,0)",
        fontSize:30,
        marginBottom:20,
      // fontFamily:"JosefinSans-Bold",
    //    fontStyle: "italic",
    // includeFontPadding: false, // only for andriod
        fontVariant: ["small-caps"],
    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center",
    },
    poster_info:{
        alignItems:"center",
        marginVertical:10,
    },
    poster_title:{
        letterSpacing:2,
        fontSize:20,
        marginBottom :10,
        textShadowColor:"rgba(0,0,0,0.75)",
        textShadowOffset: {width:-1, height:1},
        textShadowRadius:10,
        textTransform:"uppercase",
    },
    poster_text:{
        color:"#999",
        paddingHorizontal: 20,
        marginBottom: 10,
        letterSpacing:0.4,
        lineHeight:22,
        textAlign: "justify",
    },
    imgStyle:{
        width: "100%",
        height:undefined,
        aspectRatio:1,
    },
    buttonStyle:{
        borderWidth:0,
        borderRadius:20,
    },
});
export default NetFlixCard; 
