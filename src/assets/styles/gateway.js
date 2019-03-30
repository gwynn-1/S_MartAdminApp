import { StyleSheet, Dimensions} from 'react-native';
import * as constSts from '@constants/style';

const win = Dimensions.get('window');
export default gatewaySts = StyleSheet.create({
    container:{
        backgroundColor:constSts.COLOR_WHITE,
        height:"100%"
    },
    mainTheme:{
        flex:1,
        backgroundColor:constSts.COLOR_MAIN,
        alignItems: 'center',
    },
    scrView:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:"center",
        paddingTop:30
    },
    userImage:{
        width: 90,
        height:90,
        borderRadius: 45
    },
    imageContainer:{
        height:110,
        width:110,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 55,
        borderWidth:1,
        borderColor: constSts.COLOR_MAIN,
    },
    formLogin:{
        width:'80%',
        // backgroundColor:"yellow",
        marginTop:80,
    },
    formSignup:{
        width:"90%",
        marginTop:15
    },
    SignupHeader:{
        height:40,
        marginBottom:40,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'space-between'
    },
    buttonBackToLogin:{
        width:35,
        height:35,
        justifyContent:"center",
        alignContent:"center"
    },
    imageBack:{
        width:25,height:25
    },
    textRegister:{
        color:"#000000",
        fontSize:24,
        fontWeight:"900"
    },
    textBox:{
        marginBottom: 20,
        borderWidth:2
    },
    buttonLogin:{
        marginTop: 15,
    },
    textLogin:{
        color:constSts.COLOR_WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    buttonSignup:{
        marginTop: 10     
    },
    textSignup:{
        fontSize: 16,
        color:constSts.COLOR_MAIN
    },
    textForget:{
        color:"#74C9F1",
        fontSize:12,
        fontWeight: 'bold',
        textAlign:"center",
        marginTop: 10,
    }
});