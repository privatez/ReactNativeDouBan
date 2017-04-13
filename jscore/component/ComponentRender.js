/**
 * Created by private on 2017/4/12.
 */

import React, {Component} from 'react'
import {
    View,
    PixelRatio,
    Dimensions,
} from 'react-native'

import Colors from "../util/Colors";

const minWidth = 1 / PixelRatio.get();

const {width, height} = Dimensions.get('window');

const ComponentRender = {

    renderBorder(width: number = width, height: number = minWidth, borderColor: string = Colors.borderGrey): Component {

        return (<View style={{width, height, backgroundColor: borderColor}}/>);
    },

}

module.exports = ComponentRender;