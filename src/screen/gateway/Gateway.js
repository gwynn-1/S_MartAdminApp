import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView, StatusBar, Alert, Animated, Easing, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import gatewaySts from '@assets/styles/gateway.js';
import LoadingScreen from '@screen/partial/LoadingScreen';
import MainTheme from '@screen/partial/MainTheme';
import { Button, SecondaryButton, TextBox } from '@screen/partial/Component';
import SModal from '@screen/partial/SModal';
import * as constSts from '@constants/style';

import loginRule from '@validators/loginRule';
import validateForm from '@validators';
import { actError } from '@reducers/actions/error';
import { actLogin } from '@reducers/actions/auth';


import images from '@assets/images';

class Gateway extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            forgetTextColor: constSts.COLOR_BLUE_LIGHT,
            password: "",
            email: "",
            modalMessage: "",
            modalTitle: "",
            modalError: false,
            error: {}
        }
    }

    render() {
        // console.log(this.props.error);
        const error = this.state.error;
        return (
            // <ScrollView contentContainerStyle={gatewaySts.scrView} alwaysBounceVertical={false}>
            //     <View style={gatewaySts.mainTheme}>
            //         <StatusBar backgroundColor={constSts.COLOR_MAIN}
            //             barStyle="light-content"
            //         />
            //         <View style={{ height: "100%" }}>
            //             <View style={gatewaySts.imageContainer}>
            //                 <Image style={gatewaySts.userImage} source={images.logo} />
            //             </View>
            //             <Animated.View style={[gatewaySts.container, { transform: [{ translateY: this.state.startSignup }] }]}>
            //                 {this._formGateway()}
            //                 <SModal message={this.props.error.message} title="LỖI" PrimaryText="OK" isOpen={this.props.error.error} haveSecondary={false}
            //                     onPrimaryPress={() => this.closeErrorModal()}></SModal>
            //                 <SModal message={this.state.modalMessage} title={this.state.modalTitle} PrimaryText="OK" isOpen={this.state.modalError} haveSecondary={false}
            //                     onPrimaryPress={()=>this.setState({modalError:false})}></SModal>
            //             </Animated.View>
            //         </View>
            //         {(this.props.loadingScreen) ? (
            //             <LoadingScreen style={{ height: "100%" }} animating={this.props.loadingScreen} />
            //         ) : null}
            //     </View>
            // </ScrollView>
            <MainTheme style={gatewaySts.container}>
                <ScrollView contentContainerStyle={gatewaySts.scrView} alwaysBounceVertical={false}>
                    <View style={gatewaySts.imageContainer}>
                        <Image style={gatewaySts.userImage} source={images.logo} />
                    </View>
                    <View style={gatewaySts.formLogin}>
                        <TextBox placeholder="Email đăng nhập" keyboardType="email-address" errorMessage={(error.hasOwnProperty("email")) ? this.state.error.email[0] : null} style={gatewaySts.textBox} onChangeText={(value) => { this._ChangeText("email", value) }}></TextBox>
                        <TextBox secureTextEntry={true} errorMessage={(error.hasOwnProperty("password")) ? this.state.error.password[0] : null} placeholder="Mật khẩu" style={gatewaySts.textBox} onChangeText={(value) => { this._ChangeText("password", value) }}></TextBox>

                        <Button style={gatewaySts.buttonLogin} onPress={() => { this._PressLogin() }}>
                            <Text style={gatewaySts.textLogin}>
                                Đăng nhập
                            </Text>
                        </Button>
                        <TouchableWithoutFeedback onPressIn={() => { this.forgetTextPressIn() }} onPressOut={() => { this.forgetTextPressOut() }}>
                            <Text style={[gatewaySts.textForget, { color: this.state.forgetTextColor }]} >Quên mật khẩu</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
                <SModal message={this.props.error.message} title="LỖI" PrimaryText="OK" isOpen={this.props.error.error} haveSecondary={false}
                    onPrimaryPress={() => this.closeErrorModal()}></SModal>
                <SModal message={this.state.modalMessage} title={this.state.modalTitle} PrimaryText="OK" isOpen={this.state.modalError} haveSecondary={false}
                    onPrimaryPress={() => this.setState({ modalError: false })}></SModal>
                {(this.props.loadingScreen) ? (
                    <LoadingScreen style={{ height: "100%" }} animating={this.props.loadingScreen} />
                ) : null}
            </MainTheme>
        );
    }

    _ChangeText(inputtype, value) {
        this.setState({ [inputtype]: value });
    }

    forgetTextPressIn() {
        this.setState({ forgetTextColor: constSts.COLOR_GRAY });
    }
    forgetTextPressOut() {
        this.setState({ forgetTextColor: constSts.COLOR_BLUE_LIGHT });
    }

    _PressLogin() {
        var data = {
            email: this.state.email,
            password: this.state.password
        };
        var that = this;
        var validate = validateForm(data, loginRule);
        if (!validate) {
            this.setState({
                error: {}
            });

            this.props._login(data, function (status) {
                if (status == 1) {
                    that.props.navigation.dispatch(StackActions.reset(
                        {
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Main' })
                            ]
                        })
                    );
                }
            });
        } else {
            this.setState({
                error: validate
            });
        }
    }

    closeErrorModal() {
        this.props._errorAction();
    }
}

function mapStateToProps(state) {
    return {
        error: state.error,
        loadingScreen: state.global.loadingScreen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        _errorAction: function (type = null) {
            return dispatch(actError(type));
        },
        _login: function (data, callback) {
            return dispatch(actLogin(data, callback));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gateway);