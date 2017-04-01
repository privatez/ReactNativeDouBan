/**
 * Created by private on 2017/3/31.
 */
import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    Button,
    StyleSheet,
    Dimensions,
    ToastAndroid
} from 'react-native'

import {SearchBar} from 'react-native-elements'

import Banner from './Banner';
import SearchButton from '../component/SearchButton'

const {width, height} = Dimensions.get('window');

export default class MovieMain extends Component {

    static navigationOptions = {
        title: '豆瓣 Movie',
        header: ({state, setParams}) => ({
            // Render a button on the right side of the header
            // When pressed switches the screen to edit mode.
            visible: false,
        }),
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} barStyle={'light-content'} backgroundColor={'#f0f0f0'}/>
                <SearchButton onClick={() => {
                    const {navigate} = this.props.navigation;
                    navigate('MovieSearch')
                }}/>
                <Banner width={width} height={height / 3.5}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    serchBarContainer: {
        backgroundColor: '#f0f0f0',
    },
    serchBarInput: {}
});