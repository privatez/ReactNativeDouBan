/**
 * Created by private on 2017/4/1.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'

const {width, height} = Dimensions.get('window');

export default class SearchButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onClick} activeOpacity={0.8}>
                <View style={styles.searchWrapper}>
                    <View style={{flexDirection: 'row', alignItems: 'center'} }>
                        <Image style={styles.searchIcon} source={require('../../img/search.png')}/>
                        <Text style={styles.searchHint}>搜索</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

SearchButton.props = {
    onClick: () => any,
}

SearchButton.propTypes = {
    onClick: React.PropTypes.func,
}

const searchHeight = height / 14;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: searchHeight,
        paddingTop: 5,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 5,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: '#cdcdcd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    searchIcon: {
        width: 16,
        height: 16,
    },
    searchHint: {
        fontSize: 14,
        color: '#8a8a8a',
        marginLeft: 5,
    }

});
