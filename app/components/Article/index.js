import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
const Article = ( props ) => {
    const { data } = props
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onClick}>
            <Image style={styles.image}
                    source={ Array.isArray(data.multimedia) ? 
                             {uri: data.multimedia[0].url} :
                             require('../../assets/placeholder.png')}/>
            <View style={{flex:1, justifyContent:'space-between', marginStart:4}}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.date}>{data.published_date} | {data.section}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default Article;