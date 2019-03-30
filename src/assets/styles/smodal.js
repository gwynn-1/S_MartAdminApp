import {StyleSheet,Dimensions} from 'react-native';

const win = Dimensions.get('window');
export default modalStyle = StyleSheet.create({
    modal:{
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width - 25,
        height:210,
        borderRadius:10
    },
    message:{
        fontSize:20,
        color:"#000000"
    },
    titleSec:{
        flex:1,
        height:60,
        width:"100%",
        paddingLeft:20,
        justifyContent:"center"
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        color:"#000000"
    },
    messageSec:{
        flex:1,
        height:60,
        width:"100%",
        paddingLeft:20,
        paddingRight:20,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonSec:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
    },
    primary:{
        minWidth:100,
        height:40,
    },
    secondary:{
        minWidth:100,
        height:40,
    }
});
  