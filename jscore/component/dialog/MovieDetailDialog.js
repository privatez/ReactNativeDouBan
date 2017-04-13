/**
 * Created by private on 2017/4/12.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'

import BaseDialogContent from "./BaseDialogContent";

import DouBanApi from "../../api/DouBanApi";
import TextUtil from "../../util/TextUtil";

import {renderBorder} from '../ComponentRender'

const {width, height} = Dimensions.get('window');

const componentWidth = width - 70;

export default class MovieDetailDialog extends BaseDialogContent {

    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            onBackAndroid: this.props.onDismissClick,
        }
    }

    async componentDidMount() {
        const result = await DouBanApi.searchMovieById(this.props.movieId);
        this.setState({
            detail: result,
        })
    }

    render() {
        const detail = this.state.detail;

        let content = null;
        if (detail) {
            const starring = TextUtil.getDisplayText(detail.casts, 'name');
            const directors = TextUtil.getDisplayText(detail.directors, 'name');
            content = (
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{detail.title}</Text>
                    {renderBorder()}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{marginTop: 5}}>{`导演：${directors}`}</Text>
                        <Text>{`主演：${starring}`}</Text>
                        <Text>{`剧情：${detail.summary}`}</Text>
                    </ScrollView>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                {content}
                <TouchableOpacity style={styles.closeWrapper} activeOpacity={0.8}
                                  onPress={this.props.onDismissClick}>
                    <Image source={require('../../img/ic_close.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

MovieDetailDialog.propTypes = {
    movieId: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        width: componentWidth,
        height: height * 0.6,
        marginTop: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 17,
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    closeWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        left: 0,
        top: 0,
        right: 8,
        height: 40,
    },
});


