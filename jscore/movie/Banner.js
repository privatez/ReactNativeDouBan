/**
 * Created by private on 2017/3/31.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ToastAndroid
} from 'react-native'

import Swiper from 'react-native-swiper'

import BannerItem from './BannerItem'

import DouBanApi from '../api/DouBanApi'


export default class Banner extends Component {

    componentDidMount() {
        DouBanApi.searchMovie('平凡之路');
    }

    // Top250 口碑榜 北美票房榜

    render() {
        return (
            <Swiper style={styles.wrapper}
                    width = {this.props.width}
                    height = {this.props.height}
                    autoplay={true}
                    autoplayTimeout={5}
                    showsButtons={false}
                    showsPagination={true}
                    dotColor="white"
                    activeDotColor="red">
                <BannerItem image={{uri: 'https://img1.doubanio.com/img/celebrity/large/28.jpg'}}
                            onItemClick={() => ToastAndroid.show('hello 1', ToastAndroid.SHORT)}
                            desc={'Top 250'}/>
                <BannerItem image={{uri: 'https://img1.doubanio.com/img/celebrity/large/28.jpg'}}
                            onItemClick={() => ToastAndroid.show('hello 2', ToastAndroid.SHORT)}
                            desc={'口碑榜'}/>
                <BannerItem image={{uri: 'https://img1.doubanio.com/img/celebrity/large/28.jpg'}}
                            onItemClick={() => ToastAndroid.show('hello 3', ToastAndroid.SHORT)}
                            desc={'北美票房榜'}/>
            </Swiper>
        )
    }
}

Banner.props = {
    ...View.props,
    width: PropTypes.number,
    height: PropTypes.number,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapper: {},
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});