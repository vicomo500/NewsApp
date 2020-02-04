import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
const Article = (props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={styles.image} />
            <View>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.date}>Date | Category</Text>
            </View>
        </View>
    )
}


export default Article;