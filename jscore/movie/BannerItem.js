/**
 * Created by private on 2017/3/31.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'


const {width, height} = Dimensions.get('window');

export default class BannerItem extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onItemClick} activeOpacity={0.8}>
                <View style={styles.container}>
                    <Image style={styles.image} source={this.props.image}></Image>
                    <View style={styles.descWrapper}>
                        <Text style={styles.desc}>{this.props.desc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

BannerItem.props = {
    onItemClick: PropTypes.func,
    image: PropTypes.oneOfType([
        PropTypes.shape({
            uri: PropTypes.string,
        }),
        PropTypes.number,
    ]),
    desc: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    descWrapper: {
        position: 'absolute',
        top: 5,
        bottom: 0,
        left: width - 80,
        right: 0,
        height: 24,
        backgroundColor: 'green',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    desc: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 24,
        fontSize: 12,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});
