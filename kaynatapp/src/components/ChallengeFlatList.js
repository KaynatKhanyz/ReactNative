import React from "react";
import { StyleSheet,View,Text,FlatList } from "react-native";
const ChallengeFlatList = () =>{


const netflixSeries= [
    {
        name: "Archive 81",
        year: "2022",
        creator:"Rabeeca Sonnenshine",
        Genre: "Horror, thriller",
    },
    {
        name: "Cheer 1",
        year: "2021-2022",
        creator:"Greg whilteley",
        Genre: "Docuseries",
    },
    {
        name: "Corba Kai 1",
        year: "2018-2022",
        creator:"Hayden Schlossberd",
        Genre: "Darama",
    },
    {
        name: "Kaynat Khan",
        year: "2022",
        creator:"Rabeeca Sonnenshine",
        Genre: "Horror, thriller",
    },
    {
        name: "Horror film",
        year: "2018-2022",
        creator:"Hayden Schlossberd",
        Genre: "Darama",
    },
];
return(
    <View>
    <Text style={styles.listStyleOne}>List of Top 10 Netflix Series</Text>
<FlatList 
style={styles.listStyle}
keyExtractor={(key)=>{
return key.name;
}}
horizontal
showsHorizontalScrollIndicator={false}
data={netflixSeries}
    renderItem={({item})=>{
        return (
        <View style={styles.viewStyle}>
        
        <Text style={styles.textStyles}>Name :{item.name}</Text>
        <Text style={styles.textStyles}>Creator: {item.creator}</Text>
        <Text style={styles.textStyles}>Age: {item.year}</Text>
        <Text style={styles.textStyles}>Genre: {item.Genre}</Text>
        </View>
    );
    }}
    
/>
</View>
);
};
const styles = StyleSheet.create({
    listStyle:{
        textAlign:"center",
        padding:5,
        margin: 30,
    },
    textStyles:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        backgroundColor:"green",
        padding:5,
    },
    viewStyle:{
        padding:5,
        margin:20,
    },
    listStyleOne:{
        margin :30,
        fontSize:50,
    }
})
export default ChallengeFlatList;