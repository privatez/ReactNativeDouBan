/**
 * Created by private on 2017/4/1.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native'

const {width, height} = Dimensions.get('window');

export default class SearchBar extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Image style={styles.searchIcon} source={require('../img/search.png')}/>
                    <TextInput style={styles.input}
                               autoFocus={true}
                               placeholder={'搜索'}
                               returnKeyType={'search'}
                               returnKeyLabel={'search'}
                               selectionColor='red'
                               underlineColorAndroid="transparent"
                               onSubmitEditing={this.props.startSearch}/>
                </View>
                <Text style={styles.cancel} onPress={this.props.cancel}>取消</Text>
            </View>
        )
    }
}

SearchBar.props = {
    startSearch: PropTypes.func,
    cancel: PropTypes.func,
}

const searchHeight = height / 14;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: searchHeight,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 5,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#cdcdcd',
        borderRadius: 5,
        paddingLeft: 8,
        paddingRight: 8,
    },
    searchIcon: {
        width: 16,
        height: 16,
    },
    input: {
        flex: 1,
        height: searchHeight - 10,
        marginLeft: 5,
        color: '#8a8a8a',
        fontSize: 14,
        padding: 0,
    },
    cancel: {
        fontSize: 15,
        color: '#8a8a8a',
        padding: 5,
        marginLeft: 5,
    }

});
