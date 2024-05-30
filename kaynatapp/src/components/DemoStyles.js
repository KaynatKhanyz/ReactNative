import React from "react";
import { View ,Text,StyleSheet} from "react-native";
const DemoStyles = ()=>{
    return(
        <View style={styles.parentView}>
            <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
            <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
            <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    parentView:{    
        width: "95%",
        height:500,
        marginTop:100,
        marginHorizontal: 10,
        borderWidth:3,
        borderColor:"#101820FF",
        backgroundColor:"aliceclue",
        // flexDirection:"column",
        // justifyContent:"space-evenly",
        // alignItems:"flex-start",

        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    childText:{
        backgroundColor:"#97BC62FF",
        borderColor:"#2C5F2D",
        color: "#2C5F20",
        flex:1,
    },
    childText2:{
        backgroundColor:"#D4B996FF",
        borderColor:"#A07855FF",
        color: "#A07855FF",
        // alignItems:"center",
        alignSelf: "stretch",
    },
    childText3:{
        backgroundColor:"#9CC3D5FF",
        borderColor:"#0063B2FF",
        color: "#0063B2FF",
        flex: 2,
    },
    commonStyle:{
        fontSize:20,
        // padding:30,
        // paddingTop: 50,
        // paddingBottom:50,
        textAlign:"center",
        // paddingVertical: 30,
        // paddingHorizontal: 30,
        borderWidth:1,
        borderColor:"black",
        // height: 60,
        // width:60,
        // marginBottom:50,
        // marginTop:50,
        // marginHorizontal:30,
        // marginVertical:30,
    },
});
export default DemoStyles;