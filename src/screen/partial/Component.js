import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet,View,Image,Text,Animated,Dimensions,TextInput  } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import images from '@assets/images';
import * as constSts from '@constants/style';

export class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[comStyle.button, this.props.style]}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

export class SecondaryButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[comStyle.secondaryButton, this.props.style]}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

export class TextBox extends Component{
    render(){
        var error=null;
        if(this.props.errorMessage != null){
            error = (
                <Text style={{color:"red",marginBottom:5}}>{this.props.errorMessage}</Text>
            );
        }
        return (
            <View>
                <TextInput style={[comStyle.textBox,this.props.style]}
                            value ={this.props.value}
                            placeholder={this.props.placeholder}
                            keyboardType={(this.props.keyboardType != undefined) ? this.props.keyboardType :"default" }
                            secureTextEntry={this.props.secureTextEntry}
                            onChangeText={this.props.onChangeText} ref={this.props.ref}>
                </TextInput>
                {error}
            </View>
        );
        
    }
}

export class ButtonReload extends Component{
    render(){
        if(this.props.isLoading){
            var show = <BallIndicator color='white' size={25}/>
        }else{
            var show = <TouchableOpacity onPress={this.props.onPress} style={{width:40,height:40,alignItems:"center",justifyContent:"center"}}>
                            <Image source={images.reload} style={comStyle.imageReload}/>
                        </TouchableOpacity>
        }
        return (
            <View style={[comStyle.btnReload,this.props.style]}>
                {show}
            </View>
        );
    }
}

export class CheckConnection extends Component{
    render(){
        return (
            <Animated.View style={[comStyle.checkConnect,this.props.style]}>
                <Text style={comStyle.checkConnectText}>{this.props.text}</Text>
            </Animated.View>
        );
    }
}

var screenWidth=Dimensions.get("window").width;

var comStyle = StyleSheet.create({
    button: {
        backgroundColor: "#6039AF",
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: 8,
    },
    secondaryButton: {
        backgroundColor: "#ffffff",
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: 8,
        borderColor: "#6039AF",
        borderWidth: 2,
        borderStyle: "solid"
    },
    textBox:{
        fontSize: 18,
        borderRadius: 30,
        borderColor: constSts.COLOR_VIOLET_THIN,
        borderWidth: 1,
        paddingHorizontal : 20,
        paddingVertical:5,
        backgroundColor:constSts.COLOR_WHITE
    },
    btnReload:{
        position:"absolute",
        width:40,
        height:40,
        bottom:40,
        right:10,
        borderRadius: 50,
        backgroundColor:"#6039AF",
    },
    imageReload:{
        width:25,
        height:25
    },
    checkConnect:{
        width:200,
        height:20,
        position:"absolute",
        left:(screenWidth/2)-100,
        top:0,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent:"center",
        zIndex:5,
    },
    checkConnectText:{
        color:"#ffffff",
        fontSize: 12,
    }
});