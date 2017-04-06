/**
 * Created by private on 2017/3/31.
 */

import React, {Component} from 'react'
import {
    View,
    StatusBar,
    StyleSheet,
    Platform,
} from 'react-native'

import {
    Scene,
    Reducer,
    Router,
    Switch,
    Modal,
    Actions,
    ActionConst,
} from 'react-native-router-flux';

import MovieMain from './movie/MovieMain'
import MovieSearch from './movie/MovieSearch'
import MovieDetail from './movie/MovieDetail'

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };

    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

export default class AppMain extends Component {

    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene key="movieMain" component={MovieMain} initial/>
                        <Scene key="movieSearch" component={MovieSearch}/>
                        <Scene key="movieDetail" component={MovieDetail} hideNavBar={false}/>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

