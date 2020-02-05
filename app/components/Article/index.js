import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
const Article = ( props ) => {
    const { data } = props
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onClick}>
            <Image source={{uri: data.uri}}
                    style={styles.image} />
            <View style={{flex:1, justifyContent:'space-between', marginStart:4}}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.date}>{data.date} | {data.category}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default Article;