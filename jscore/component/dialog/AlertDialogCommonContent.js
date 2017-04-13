/**
 * Created by private on 2017/4/12.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'

import {renderBorder} from '../ComponentRender'

const {width, height} = Dimensions.get('window');

const componentWidth = width / 1.5;

export default class AlertDialogCommonContent extends Component {

    render() {
        return (
            <View style={[styles.container, {height: 200}]}>
                <Text>提示</Text>
                {renderBorder(componentWidth)}
                <Text>确定</Text>
            </View>
        )
    }
}

AlertDialogCommonContent.propTypes = {
    onDismissClick: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        width: componentWidth,
        marginTop: height / 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
});


