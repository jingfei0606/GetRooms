import React , { Component } from 'react';
import { View , StatusBar, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class GetStatusBarPlaceHolder extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View
              style={{
                width: '100%',
                height: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
                backgroundColor: '#183D59',
              }}>
              <StatusBar barStyle="light-content" backgroundColor="#183D59" />              
            </View>
          );
    }
}

export default GetStatusBarPlaceHolder;