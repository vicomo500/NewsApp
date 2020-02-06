import React from 'react';
import { View, Text, Image, ScrollView, Button, Linking } from 'react-native';
import moment from 'moment';
import styles from './styles';

const DetailsScreen = ( { navigation } ) => {
    const dateStr = navigation.getParam('published_date', "");
    const date = moment(dateStr, "YYYY-MM-DDTHH:mm:ss+00:00");
    const multimedia = navigation.getParam('multimedia', null)
    const imgComp = Array.isArray(multimedia) ? 
    <View style={{borderBottomWidth:1, borderBottomColor:'#CED0CE'}}>
        <Image 
            style={{width:'100%', height:200, marginTop:4,}}
            source={{uri: navigation.getParam('uri', multimedia[multimedia.length-1].url )}}
        />
        <Text>{multimedia[multimedia.length-1].caption}</Text>
    </View> : 
    null ;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}> {navigation.getParam('title', null)} </Text>
                <View style={{flex:1, flexDirection:'row', flexWrap:'nowrap', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.caption}> {date.utc().format('ddd MMM Do YYYY')} | {navigation.getParam('section', null)} </Text>
                    <Text style={{fontSize:10}}>{navigation.getParam('byline', null)}</Text>
                </View>
                {imgComp}
                <Text style={styles.content}>{navigation.getParam('abstract', null)}</Text>
                <Button style={styles.button}
                        title='Full Story'
                        color='green' 
                        onPress={() =>{
                            Linking.canOpenURL(navigation.getParam('url', null))
                            .then((supported) => {
                                if (!supported) {
                                console.log("Can't handle url: " + url);
                                } else {
                                return Linking.openURL(navigation.getParam('url', null));
                                }
                            })
                            .catch((err) => console.error('An error occurred', err));
                        }}/>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen;

