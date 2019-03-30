import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, NetInfo, Animated, Easing, Platform, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import MainTheme from '@screen/partial/MainTheme';
import Header from '@screen/partial/Header';
import { CheckConnection } from '@screen/partial/Component';
import homeSts from '@assets/styles/home.js';
import images from '@assets/images';
import * as constSts from '@constants/style';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

import SModal from '@screen/partial/SModal';
import LoadingScreen from '@screen/partial/LoadingScreen';
import { actLogout } from '@reducers/actions/auth';
import { actModal } from '@reducers/actions/global';

// import { fcmUpdateQR } from '@firebase/notification';

class Home extends Component {
    static navigationOptions = {
        header: null,
        headerLeft: null, gesturesEnabled: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            bcData: "Không nhận diện được Mã Barcode",
        }
    }

    onBarCodeRead(barcode) {
        if(barcode.length>0){
            this.setState({bcData: barcode})
        }else{
            this.setState({bcData: "Không nhận diện được Mã Barcode"})
        }
    }

    render() {
        bCode = this.state.bcData;
        return (
            <MainTheme style={homeSts.container}>
                <Header navigation={this.props.navigation} />

                <ScrollView contentContainerStyle={homeSts.body} alwaysBounceVertical={false}>
                    <View style={homeSts.camContainer}>
                        <RNCamera
                            ref={cam => {
                                this.camera = cam;
                            }}
                            style={homeSts.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            onFocusChanged={() => { }}
                            onZoomChanged={() => { }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                this.onBarCodeRead(barcodes)
                            }}
                        >
                            <BarcodeMask width={300} height={300} />
                        </RNCamera>
                        <View style={homeSts.barcodeData}>
                            <Text style={homeSts.scanScreenMessage}>
                                {(typeof bCode == "string") ? bCode: bCode.map((item,index)=>{
                                    if(index == bCode.length -1){
                                        return item.data
                                    }
                                    else{
                                        return item.data + ", "
                                    }
                                }) }
					        </Text>
                        </View>
                        {/* <View style={[homeSts.overlay, homeSts.bottomOverlay]}>
                            <Button style={homeSts.enterBarcodeManualButton}
                                title='Enter Barcode Manually'>
                            </Button>
                        </View> */}
                    </View>
                </ScrollView>
                {(this.props.loadingScreen) ? (
                    <LoadingScreen style={{ height: "100%" }} animating={this.props.loadingScreen} />
                ) : null}
                <SModal message="Bạn có muốn đăng xuất ?" title="Thoát" PrimaryText="Có" SecondaryText="Không" isOpen={this.props.modalOpen} haveSecondary={true}
                    onPrimaryPress={() => this.LogoutConfirm()} onSecondaryPress={() => this.props._actModal()}></SModal>
                <SModal message={this.props.error.message} title="LỖI" PrimaryText="OK" isOpen={this.props.error.error} haveSecondary={false}
                    onPrimaryPress={() => this.closeErrorModal()}></SModal>
            </MainTheme>
        )
    }

    LogoutConfirm() {
        var that = this;
        this.props._actModal();
        this.props._logout(function (status) {
            if (status == 1) {
                that.props.navigation.dispatch(StackActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Gateway' })
                        ]
                    }));
            }
        });
    }

    closeErrorModal() {
        this.props._errorAction();
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    modalOpen: state.global.s_modal,
    loadingScreen: state.global.loadingScreen,
    error: state.error,
});

function mapDispatchToProps(dispatch) {
    return {
        _logout: function (callback) {
            return dispatch(actLogout(callback));
        },
        _actModal: function () {
            return dispatch(actModal());
        },
        _errorAction: function (type = null) {
            return dispatch(actError(type));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);