import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content: center;
    background-color:#fff;
`;
export const Image = styled.Image`
    width:100px;
    height:100px;
`;
export const ImageS = styled.Image`
    margin-top: 4%;
    width:280px;
    height:250px;
`;
export const Text = styled.Text`
    font-size: 14px;
    color:#ffff;
    text-align: center;
    font-family: Poppins-Regular;
    position: relative;
    
`;
export const TextClick = styled.Text`
    font-size: 14px;
    color:#934fd6;
    text-align: center;
    font-family: Poppins-Regular;
    position: relative;
    
`;
export const Buttom = styled.TouchableOpacity`
    width:250px;
    height:45px;
    border-radius: 18px;
    background-color:#6600c4;
    justify-content: center;
    align-items: center;
`;
export const ButtomClick = styled.TouchableOpacity`
   
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
`;
export const ButtomArea = styled.SafeAreaView`
    width: 100%;
    height:30%;
    background-color: #934fd6;;
    border-top-right-radius:45px;
    border-top-left-radius:45px;
    align-items:center;
    justify-content: center;
`;
export const InfoArea = styled.SafeAreaView`
    width: 100%;
    height:70%;
    align-items:center;
    justify-content: center;
    padding-bottom: 10%;
  
   
`;