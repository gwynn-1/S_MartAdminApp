import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params, reset=false) {

    setTimeout(() => {
        if(reset){
            _navigator.dispatch(
                NavigationActions.navigate(StackActions.reset(
                    {
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName,params })
                        ]
                    }))
            );
        }else{
            _navigator.dispatch(
                NavigationActions.navigate({
                    routeName,
                    params,
                })
            );
        }
        
    }, 1);
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};