import {StyleSheet} from 'react-native';

export default waitingSts = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#6039AF",
        alignItems: 'center',
    },
    logoImage:{
        width:150,
        height:150,
        marginTop: 90,
        borderRadius: 75,
    },
    loadingSection:{
        width:"100%",
        height:100,
        alignItems: 'center',
        justifyContent:"center",
        marginTop:50
    },
    loadingText:{
        color:"#ffffff",
        fontSize: 12,
    }
});