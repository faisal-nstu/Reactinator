import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetails = ({album}) => {

    const {title, artist, thumbnail_image} = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Image 
                     style={styles.thumbStyle}
                     source={{uri: thumbnail_image}}
                     />
                </View>
                <View>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbStyle:{
        height: 50,
        width: 50
    }
};

export default AlbumDetails;