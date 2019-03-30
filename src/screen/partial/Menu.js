import React, { Component } from 'react';
import { View,ScrollView,Text,Image,TouchableOpacity,Alert } from 'react-native';
import {connect} from 'react-redux';
import images from '@assets/images';

import {
    API_BASE_URL
} from '@constants/api';
import Menu from '@assets/styles/menu';
import {NavigationActions,StackActions} from 'react-navigation';
import {actModal} from '@reducers/actions/global';


class MenuBar extends Component{
    constructor(props){
        super(props);
    }
    
    _goToReceipt(){
        var that =this;
        
          this.props.navigation.closeDrawer();
        setTimeout(function(){ 
            that.props.navigation.navigate('Receipt');
        }, 800); 
    }

    _goToAccount(){
        var that =this;
        
        this.props.navigation.closeDrawer();
        setTimeout(function(){ 
            that.props.navigation.navigate('Account');
        }, 800); 
        
    }

    render(){
        // console.log(this.props.user)
        return (
            <ScrollView contentContainerStyle={Menu.container} alwaysBounceVertical={false}>
                <View style={Menu.HeaderMenu}>
                    <Image source={images.defaultBackground} style={Menu.HeaderMenuImage}/>
                    <View style={Menu.menuAvatar}>
                        <Image source={(this.props.user.avatar !=null) ? {uri:API_BASE_URL+this.props.user.avatar} :images.user} style={Menu.userAvatar}/>
                    </View>
                    <View style={Menu.menuUser}>
                        <Text style={Menu.textUser}>{this.props.user.name}</Text>
                    </View>
                </View>
                <View style={Menu.listMenu}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}} style={Menu.touchItem}>
                            <View style={Menu.menuItem} >
                                <Image source={images.home} style={Menu.icon}/>
                                <Text style={Menu.itemText}>Trang chủ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.touchItem} onPress={()=>{ }}>
                            <View style={Menu.menuItem}>
                                <Image source={images.account} style={Menu.icon} />
                                <Text style={Menu.itemText}>Tài khoản</Text>
                            </View>
                        </TouchableOpacity>
                    <View style={Menu.footer}>
                        <TouchableOpacity style={Menu.touchItem}>
                            <View style={Menu.footerItem}>
                                <Text style={Menu.footerText}>Cài đặt</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.touchItem}>
                            <View style={Menu.footerItem}>
                                <Text style={Menu.footerText}>Trợ giúp</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.touchItem}>
                            <View style={Menu.footerItem}>
                                <Text style={Menu.footerText}>Liên Hệ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.touchItem} onPress={()=>{this._PressLogout()}}>
                            <View style={Menu.footerItem}>
                                <Image source={images.logout} style={Menu.iconFooter}/>
                                <Text style={[Menu.footerText,{color:"red"}]}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        );
    }

    _PressLogout(){
        var that =this;
        this.props.navigation.closeDrawer();

        this.props._modalAction();
        // Alert.alert(
        //     'Đăng xuất',
        //     'Bạn có muốn đăng xuất ?',
        //     [
        //       {text: 'Có', onPress: () => that.LogoutConfirm()},
        //       {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     ],
        //     { cancelable: false }
        //   )
    }
}

function mapStateToProps(state){
    return {
        user:state.auth.user,
        loginError:state.loginError,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        _modalAction:function(){
            return dispatch(actModal());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuBar);