/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Alert, FlatList,  StyleSheet, Text, View,Dimensions } from 'react-native';
import Card from "./components/Card";
import Search_bar from './components/SearchBar';
import products from './products.json';
const win =Dimensions.get('window');


const App =()=>{
  return <View style={{flex: 1,backgroundColor:"white"}}>
    <Text style={styles.brand}>PATKİKASTORE</Text>
    <View style={styles.container}>
    
    <FlatList 
    ListHeaderComponent={()=><Search_bar/>}
      data={products}
      numColumns={2}
      renderItem={({item}) =><Card product={item}/> }
      
    />

    </View>
  </View>
 }

 const styles = StyleSheet.create({
   container:{
     margin:20,
    width:win.width/1,
    
   },
   brand:{
     marginLeft:20,
     marginRight:20,
     marginTop:20,
     marginBottom:10,
     fontSize:28,
     fontWeight:'bold',
     color:'#9d4edd'
   }
 })
export default App;
