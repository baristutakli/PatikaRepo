import { StyleSheet,Dimensions } from "react-native";
const win = Dimensions.get('window');

export default StyleSheet.create({
    box:{
        margin:5,
        
        borderRadius:10,
        backgroundColor:"#e9ecef",
        padding:10,
        width: win.width/2.3,
        height:win.height/3

    },
    image:{
        flex:3,
        borderRadius:5
    },
    innerBox:{
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:14
        
    }

});