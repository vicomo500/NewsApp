import React from 'react';
import { View, Text, Image, ScrollView, Button, Dimensions } from 'react-native';
import styles from './styles';

const DetailsScreen = ( { navigation } ) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}> {navigation.getParam('title', null)} </Text>
                <Text style={styles.caption}> {navigation.getParam('date', null)} | {navigation.getParam('category', null)} </Text>
                <Image 
                    style={{width: Dimensions.get('screen').width, height:200, marginTop:4,}}
                    source={{uri: navigation.getParam('uri', null)}}
                />
                <Text style={styles.content}>{navigation.getParam('content', null)}</Text>
                <Button style={styles.button} title='Full Story' color='green'/>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen;

