/**
 * Created by private on 2017/4/13.
 */

import React, {Component, PropTypes} from 'react'
import {
    Platform,
    BackAndroid,
} from 'react-native'

export default class BaseDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onBackAndroid: null,
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.state.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.state.onBackAndroid);
        }
    }

}

BaseDialog.propTypes = {
    onDismissClick: PropTypes.func,
}


