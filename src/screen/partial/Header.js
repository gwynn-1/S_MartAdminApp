import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import images from '@assets/images';
import headerStyle from '@assets/styles/header';

export default class Header extends Component {
    render() {
        return (
            <View style={headerStyle.container}>
                <View style={headerStyle.body}>

                    {(this.props.isBack) ? (
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} >
                            <View style={headerStyle.button}>
                                <Image style={headerStyle.menuImage} source={images.back} />
                            </View>
                        </TouchableWithoutFeedback>
                    ) : (
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} >
                                <View style={headerStyle.button}>
                                    <Image style={headerStyle.menuImage} source={images.menu} />
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    <View>
                        <Image style={headerStyle.iconImage} source={images.logo} />
                    </View>
                </View>
            </View>
        );
    }
}