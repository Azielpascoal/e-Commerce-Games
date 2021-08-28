import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content: center;
    background-color:#fff;
`;
export const Image = styled.Image`
    width:350px;
    height:350px;
`;
export const Text = styled.Text`
    font-size: 16px;
    color:#1a2a3a;
    text-align: center;
    
`;
export const Buttom = styled.TouchableOpacity`
    width:350px;
    height:45px;
    border-radius: 18px;
    background-color:#F7D86D;
    justify-content: center;
    align-items: center;
    margin-top: 12%;
`;