import React from "react";
import {View, Text,Image, TextInput} from 'react-native';
import styles from './Product.style';

const Product = ({products}) => {
    return(      
        <View style={styles.container}>      
            <Text style={styles.title}>{products.title}</Text>
            <Image style={styles.image}
                source={{
                    uri:products.imgURL
                }}
            />
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.stock}>{products.inStock ? "" : "STOKTA YOK"}</Text>
        </View>
    )
}

export default Product;