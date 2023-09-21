import React from 'react';
import {Text,View, StyleSheet, FlatList, TextInput} from 'react-native';
import Product from './src/components/Product';
import product from './product.json';


const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.main_title}>PATİKA STORE</Text>
      <View style={styles.inner_container}>
      <TextInput 
      placeholder='Ara..'
      />
      </View>
      <FlatList 
        keyExtractor={ (item, index) => item.id }
        numColumns={2}
        data={product}
        renderItem={({item}) => <Product products={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    inner_container:{
      backgroundColor:'#c0c0c0',
      margin:10,
      borderRadius:5
    },
    main_title:{
      color:'#8b008b',
      fontWeight:'bold',
      fontSize:30,
      marginTop:5,
      marginLeft:5
    }
})

export default App;
