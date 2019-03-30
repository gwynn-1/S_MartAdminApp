import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';
import * as constSts from '@constants/style';

export default class MainTheme extends Component{
    
    render(){
        return (
            <View style={this.props.style}>
                <StatusBar backgroundColor={constSts.COLOR_MAIN}
                        barStyle="light-content"
                        />
                {this.props.children}
            </View>
        );
    }
}