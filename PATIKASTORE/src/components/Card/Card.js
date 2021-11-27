import React from "react";
import {View,Text,Image } from 'react-native';
import styles from "./Card.style";

const Card = ({product})=>{
    return(
        <View style={styles.box}>
            <Image style={styles.image} source= {{uri:product.imgURL}} />
            <View style={styles.innerBox}>
            <Text style={styles.title}>             
                {product.title}
                </Text>
                <Text>
                {product.price}
                </Text>
                <Text>
{product.inStock}
            </Text>
            </View>

        </View>
        
        
       
    )
}
export default Card;
