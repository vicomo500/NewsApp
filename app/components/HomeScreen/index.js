import React, { Component } from 'react';
import { View, FlatList} from 'react-native';
import styles from './styles';
import {DUMMY_DATA} from './dummy_data';
import Article from '../Article';

class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={DUMMY_DATA}
                    renderItem={ item => <Article data={item} /> }
                />
            </View>
        )
    }
}
export default HomeScreen;

