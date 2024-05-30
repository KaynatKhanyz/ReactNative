import React, { useState } from "react";
import { TouchableOpacity, StyleSheet,View,Text } from "react-native";
 
const CounterNumber=()=>{
    const [counter, setCounter]= useState(0);
    return(
        <View>
        
            <Text style ={styles.counter}>{counter}</Text>
            <View style={styles.button_group}>
                <TouchableOpacity 
                style={[styles.commonButton, styles.subtract]}
                onPress={()=>{
                    setCounter(counter+10);
                }}>
                <Text style={styles.commonText}> +10</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.commonButton, styles.reset]}
                onPress={()=>{
                    setCounter(0);
                }}>
                <Text style={styles.commonText}> Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.commonButton, styles.add]}
                onPress={()=>{
                    if (counter>0)
                    setCounter(counter-10);
                }}>
                <Text style={styles.commonText}> -10</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
 const styles= StyleSheet.create({
    textStyle:{
        color:"red",
    },
    counter:{
        fontSize:80,
        textAlign:"center",
        width:"100%",
        padding:20,
        marginTop:60,
        marginBottom: 30,
    },
    button_group:{
        width:"100%",
        display:"flex",
        alignItems:"center",
    },
    commonButton:{
        backgroundColor: "grey",
        color:"white",
        padding:20,
        margin: 20,
    },
    reset:{
        
    },
    commonText:{
        
    },
    add:{

    },
    subtract:{

    },
 });
 export default CounterNumber;