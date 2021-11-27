import { StyleSheet,Dimensions } from "react-native";
const win = Dimensions.get('window');

export default StyleSheet.create({
    search_bar:{
        width:win.width/1.1,
        borderRadius:10,
        backgroundColor:'#e9ecef',
        borderColor:'#f8f9fa',
        borderWidth:1,
        padding:10,
        marginBottom:5 
    }

});