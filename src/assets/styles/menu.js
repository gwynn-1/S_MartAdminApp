import {StyleSheet} from 'react-native';

export default Menu = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor:"red"
    },
    HeaderMenu:{
        width:"100%",
        
        flex:1,
        flexDirection: 'row',
    },
    touchItem:{
        width:"100%",
        alignItems: 'center',
    },
    HeaderMenuImage:{
        position:"absolute",
        top:0,left:0,
        width:"100%",
        height:"100%",
        resizeMode: 'cover',
    },
    menuAvatar:{
        flex:1,
        height:"100%",
        alignItems: 'center',
        justifyContent:"center",
    },
    userAvatar:{
        width:70,
        height:70,
        borderRadius: 35
    },
    menuUser:{
        flex:2,
        // backgroundColor:"yellow",
        height:"100%",
        alignItems: 'flex-start',
        justifyContent:"center",
    },
    textUser:{
        marginLeft: 15,
        color:"#ffffff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    listMenu:{
        flexDirection:"column",
        alignItems: 'center',
        flex: 5,
    },
    menuItem:{
        width:"90%",
        height:50,
        borderBottomWidth:  1,
        borderBottomColor: "#c8c8c8",
        justifyContent:"flex-start",
        flexDirection:"row",
        alignItems: 'center',
    },
    icon:{
        width:18,
        height:18,
        marginLeft: 10,
    },
    itemText:{
        color:"#555555",
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    footer:{
        marginTop: 30,
        width:"100%",
        
    },
    footerItem:{
        width:"90%",
        height:40,
        justifyContent:"flex-start",
        flexDirection:"row",
        alignItems: 'center',
    },
    footerText:{
        color:"#555555",
        fontSize: 16,
    },
    iconFooter:{
        width:15,
        height:15,
        marginRight: 10,
    }
})