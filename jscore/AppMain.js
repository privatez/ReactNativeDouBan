/**
 * Created by private on 2017/3/31.
 */

import {StackNavigator} from 'react-navigation';

import MovieMain from './movie/MovieMain'
import MovieSearch from './movie/MovieSearch'

const app = StackNavigator({
    MovieMain: {screen: MovieMain},
    MovieSearch: {screen: MovieSearch},
}, {
    headerMode: 'screen'
});

module.exports = app;