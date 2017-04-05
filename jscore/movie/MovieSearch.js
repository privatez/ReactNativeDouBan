/**
 * Created by private on 2017/4/1.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ToastAndroid,
    Dimensions,
    PixelRatio,
} from 'react-native'

import SearchBar from '../component/SearchBar'

import DouBanApi from '../api/DouBanApi'
import Colors from '../util/Colors'
import StringUtil from '../util/StringUtil'


const {width, height} = Dimensions.get('window');

const itemHeight = height / 5;

const minPixel = 1 / PixelRatio.get();

export default class MovieSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
        };
    }

    async startSearch(event) {
        let result = await DouBanApi.searchMovie(event.nativeEvent.text);
        if (!result) {
            ToastAndroid.show('搜索异常', ToastAndroid.SHORT);
        }
        this.setState({
            searchResults: result.subjects,
        })
    }

    isHasHistory() {
        return false;
    }

    renderRow({item}) {
        let genres = StringUtil.getDisplayTextDefault(item.genres, null, 12);
        let starring = StringUtil.getDisplayTextDefault(item.casts, 'name', 12);
        let directors = StringUtil.getDisplayTextDefault(item.directors, 'name', 12);
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemImage} source={{uri: item.images.large}}/>
                <View style={styles.itemContent}>
                    <Text>{`片名：${item.title}`}</Text>
                    <Text>{`年份：${item.year}`}</Text>
                    <Text>{`导演：${directors}`}</Text>
                    <Text>{`主演：${starring}`}</Text>
                    <Text>{`评分：${item.rating.average} / ${item.rating.max}`}</Text>
                    <Text>{`分类：${genres}`}</Text>
                </View>
            </View>
        );
    }

    render() {
        let history = this.isHasHistory() ? (
            <Text style={{height: 120}}>
                历史
            </Text>
        ) : null;

        return (
            <View style={styles.container}>
                <SearchBar startSearch={this.startSearch.bind(this)}
                           cancel={() => ToastAndroid.show('cancle', ToastAndroid.SHORT)}/>
                <View style={{width, height: minPixel, backgroundColor: Colors.borderGrey}}/>
                {history}
                <FlatList style={styles.list}
                          data={this.state.searchResults}
                          renderItem={this.renderRow.bind(this)}
                          getItemLayout={(data, index) => (
                              // 120 是被渲染 item 的高度 ITEM_HEIGHT。
                              {length: itemHeight, offset: itemHeight * index, index}
                          )}
                          keyExtractor={(item, index: number) => `${item}${index}`}
                />
            </View>
        )

    }
}

MovieSearch.navigationOptions = {
    header: ({state, setParams}) => ({
        visible: false,
    }),
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: itemHeight,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
        marginBottom: 5,
        padding: 8,
    },
    itemImage: {
        width: (itemHeight - 16) * 0.75,
        height: itemHeight - 16,
        borderRadius: 5
    },
    itemContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'flex-start'
    }
});