import React from "react";
import {View, TextInput, Alert} from 'react-native';
import styles from './search_bar.style';

const Search_bar = () =>{
    const Tiklandi =search=>{ {}}
    return (
        

    <TextInput
        style={styles.search_bar}
        placeholder="Search anything"
        onChange={Tiklandi}
        />
        
        
        
    )
}
export default Search_bar;