import React, { Component } from 'react';
import { View } from 'react-native';
import ldScreenSts from '@assets/styles/loadingScreen.js';
import * as constSts from '@constants/style';
import {SkypeIndicator} from 'react-native-indicators';

export default class LoadingScreen extends Component{
    render(){
        if(this.props.animating){
            var show = <SkypeIndicator color={constSts.COLOR_MAIN} size={65}/>
        }else{
            var show = <View></View>
        }
        return (
            <View style={[ldScreenSts.container,this.props.style]}>

                {/* <ActivityIndicator animating={this.props.animating} size="large" color="#6039AF" /> */}
                {show}
            </View>
        );
    }
}