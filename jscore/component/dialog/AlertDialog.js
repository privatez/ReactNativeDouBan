/**
 * Created by private on 2017/4/12.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import CommonContent from "./AlertDialogCommonContent";

export default class AlertDialog extends Component {

    render() {

        return (
            <View style={styles.container}>
                {this.props.contentComponent}
            </View>
        )
    }
}

AlertDialog.defaultProps = {
    contentComponent: <CommonContent/>
}

AlertDialog.propTypes = {
    contentComponent: PropTypes.element,
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0009',
        alignItems: 'center',
    },
});

