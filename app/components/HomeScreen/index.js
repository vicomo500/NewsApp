import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import Article from '../Article';

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            error: null,
            data: []
        }
    }
    componentDidMount(){
        fetch('https://api.myjson.com/bins/nl6jh/')
          .then(response=> response.json())
          .then(responseJson => {
            this.setState({
              isLoading: false,
              data: responseJson.results,
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({
                isLoading: false,
                error: error,
            })
          });
      }
    
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
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
                </View>
            )
        }
        const { navigate } = this.props.navigation;
        return (
            this.state.error ?
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'red'}}>Oops!!! An error occurred</Text>
            </View> :
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
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

