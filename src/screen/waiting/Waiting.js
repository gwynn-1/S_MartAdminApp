import React, { Component } from 'react';
import { View, Image, StatusBar, ActivityIndicator, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import * as constSts from '@constants/style';
import { SkypeIndicator } from 'react-native-indicators';
import waitingSts from '@assets/styles/waiting.js';
import images from '@assets/images';
import { actCheckLogin } from '@reducers/actions/auth';

class Waiting extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={waitingSts.container}>
                <StatusBar backgroundColor={constSts.COLOR_MAIN}
                    barStyle="light-content"
                />
                <Image style={waitingSts.logoImage} source={images.logo} />
                <View style={waitingSts.loadingSection}>
                    {/* <ActivityIndicator animating={true} size="small" color="#ffffff" /> */}
                    <SkypeIndicator color='white' size={15} />
                    <Text style={waitingSts.loadingText}>Đang kiểm tra thông tin đăng nhập...</Text>
                </View>
            </View>
        );
    }

    componentDidMount() {
        var that = this;
        this.props._CheckLogin(function (status) {
            if (status == 1) {
                that.props.navigation.dispatch(StackActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Main' })
                        ]
                    }));
            } else {
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
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

function mapDispatchToProps(dispatch) {
    return {
        _CheckLogin: function (callback) {
            return dispatch(actCheckLogin(callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Waiting);