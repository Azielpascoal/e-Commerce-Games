import React, { useState } from 'react';
import { InputArea, Icon } from './style'
import { Input } from 'galio-framework';
import { StyleSheet } from 'react-native'


export default ({ placeholder, password, value,onChangeText, IsError, IsSuccess, onChange,type,Icones,focus,onBlur,source ,...rest }) => {
    return (
        <InputArea IsSuccess={IsSuccess} IsError={IsError}>
            <Icon
                source={source}
            />
            <Input
            placeholder={placeholder}
            style={style.input}
            value={value}
            onChangeText={onChangeText}
            onChange={onChange}
            password={password}
            viewPass
            placeholderTextColor="#fafafa"
            iconColor="#934fd6"
            onBlur={onBlur}
            autoFocus={focus}
            type={type}
            color="#fff"
            selectionColor="#934fd6"
        />
        </InputArea>

    );
}
const style = StyleSheet.create({
    input: {
        width: '125%' ,
        height: 38,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#fff',
        borderColor:'#6600c4',
        backgroundColor:"#6600c4"

        
        // alignItems: center,
    }

});