import React, { Component } from 'react';
import { View, FlatList, } from 'react-native';
import styles from './styles';
import {DUMMY_DATA} from './dummy_data';
import Article from '../Article';

class HomeScreen extends Component {
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
      };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={DUMMY_DATA}
                    renderItem={ 
                        ({item}) => 
                        <Article
                            data={item} 
                            onClick={() => navigate('Details', item)}/> 
                    }
                    keyExtractor={ item => item.title}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}
export default HomeScreen;

