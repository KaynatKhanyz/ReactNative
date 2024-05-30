
import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
const FlatLists = () => {
    const names =[
    {
        index: "1",
        name: "Kaynat",
    },
    {
        index : "2",
        name: "Khan",
    },
    {
        index: "3",
        name: "Yousaf",
    },
    {
         index : "4",
        name: "Zai",
    },
    {
        index : "5",
        name: "Hehe",
    },
    {
        index : "6",
        name: "huha",
    },
    {
        index : "7",
        name: "yayy",
    },
    ];
    return (
      <FlatList 
      keyExtractor={(key)=>{
        return key.index;
      }}
     horizontal
     inverted
     //numColumns={2}
      showsHorizontalScrollIndicator = {false}
      data={names}
      renderItem={(element)=>{
        console.log(element.item.name);
        return <Text style={styles.textStyle}>{element.item.name}</Text>;
      }}/>
    );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        padding:30,
        backgroundColor:"blue",
        margin: 20,
        color:"white",
    },
    listStyle:{
        textAlign:"center",
        margin:20,
        padding:10,
    }
});

export default FlatLists;