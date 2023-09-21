import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c0c0c0',
        margin:10,
        borderRadius:5
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black'
    },
    image:{
        marginLeft:5,
        marginTop:5,
        width: 105,
        height: 120,
        borderRadius:5
    },
    price:{
        marginTop:5,
        marginLeft:5,
        color:'gray',
        fontWeight:'bold'
    },
    stock:{
        color:'red',
        fontWeight:'bold',
        marginBottom:5
    }
});