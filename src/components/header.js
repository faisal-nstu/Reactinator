import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const {textStyle,viewStyle} = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle:{
        backgroundColor:'#f1f1f1',
        justifyContent: 'center',
        alignItems:'center',
        height:50,
        elevation:2,
        position:'relative',
    },
    textStyle : {
        fontSize:20,
    },
};

export default Header;