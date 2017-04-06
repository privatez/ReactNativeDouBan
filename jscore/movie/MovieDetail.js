/**
 * Created by private on 2017/4/5.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
} from 'react-native'

import TextUtil from '../util/TextUtil'
import Colors from '../util/Colors'
import DouBanApi from '../api/DouBanApi'

const {width, height} = Dimensions.get('window');
const itemHeight = height / 5;

const minWidth = 1 / PixelRatio.get();

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: null,
        }
        this.props.navigationState.title = this.props.title;
    }

    async componentDidMount() {
        const result = await DouBanApi.searchMovieById(this.props.id);
        this.setState({
            detail: result,
        })
    }

    render() {
        let content = null;
        if (this.state.detail) {
            const detail = this.state.detail;
            const genres = TextUtil.getDisplayText(detail.genres, null, 12);
            const starring = TextUtil.getDisplayText(detail.casts, 'name', 12);
            const directors = TextUtil.getDisplayText(detail.directors, 'name', 12);
            
            content = (
                <View style={styles.itemContainer}>
                    <Image style={styles.itemImage} source={{uri: detail.images.large}}/>
                    <View style={styles.itemContent}>
                        <Text>{`片名：${detail.title}`}</Text>
                        <Text>{`年份：${detail.year}`}</Text>
                        <Text>{`导演：${directors}`}</Text>
                        <Text>{`主演：${starring}`}</Text>
                        <Text>{`评分：${detail.rating.average} / ${detail.rating.max}`}</Text>
                        <Text>{`分类：${genres}`}</Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
        borderRadius: 5,
        borderWidth: minWidth,
        borderColor: Colors.borderGrey,
    },
    itemContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'flex-start'
    }
});


