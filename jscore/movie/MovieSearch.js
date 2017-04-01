/**
 * Created by private on 2017/4/1.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    ListView,
    StyleSheet,
    ToastAndroid,
} from 'react-native'

import SearchBar from '../component/SearchBar'

import DouBanApi from '../api/DouBanApi'

export default class MovieSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    static navigationOptions = {
        header: ({state, setParams}) => ({
            // Render a button on the right side of the header
            // When pressed switches the screen to edit mode.
            visible: false,
        }),
    }

    startSearch(event) {
        ToastAndroid.show(event.nativeEvent.text, ToastAndroid.SHORT);
        let result = DouBanApi.searchMovie(event.nativeEvent.text);
        if (!result) {
            ToastAndroid.show('搜索异常', ToastAndroid.SHORT);
        }
        this.state.result = result;
    }

    isHasHistory() {
        return true;
    }

    renderRow(contentData) {
        return (
            <Text>{contentData.year}</Text>
        );
    }

    history() {
        return this.isHasHistory() ? (
            <Text style={{flex: 1}}>
                历史
            </Text>
        ) : null;
    }

    searchResult() {
        return this.state.result ? (
            <ListView
                dataSource={this.state.result}
                renderRow={this.renderRow}
            />
        ) : null;
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar startSearch={this.startSearch}
                           cancel={() => ToastAndroid.show('cancle', ToastAndroid.SHORT)}/>
                {this.history()}
                {this.searchResult()}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});