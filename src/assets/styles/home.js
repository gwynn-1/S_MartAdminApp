import { StyleSheet, Dimensions } from 'react-native';
import * as constSts from '@constants/style';

var screenWidth=Dimensions.get("window").width;

export default homeSts = StyleSheet.create({
    body:{
        // flex: 1,
        backgroundColor:"#ffffff",
        flexGrow: 1,
        alignItems: 'center',
    },
    container:{
        backgroundColor:"#ffffff",
        height:"100%"
    },
    camContainer:{
        width:"100%",
        alignItems:"center"
    },
    preview:{
        width:"90%",
        marginTop:20,
        height:450
    },
    barcodeData:{
        marginTop:20,
        paddingVertical: 10,
        width:300,
        alignItems:"center",
        backgroundColor:constSts.COLOR_GRAY_THIN,
    },
    scanScreenMessage:{
        color:constSts.COLOR_BLACK,
        fontSize:16
    }
})