import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content: center;
    background-color:#fff;
`;
export const Image = styled.Image`
    width:80px;
    height:80px;
`;
export const ImageLogin = styled.Image`
   tint-color:#fff;
   width:35px;
   height: 25px;
`;
export const ImageS = styled.Image`
    margin-top: 4%;
    width:280px;
    height:250px;
`;
export const Text = styled.Text`
    font-size: 14px;
    color:#934fd6;
    text-align: center;
    font-family: Poppins-Regular;
    position: relative;
    
`;
export const TextClick = styled.Text`
    font-size: 14px;
    color:#fff;
    font-family: Poppins-Regular;
    padding-left: 12px;
    
`;
export const Buttom = styled.TouchableOpacity`
    width:70px;
    height:45px;
    border-radius: 12px;
    background-color:#6200c4;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
`;
export const ButtomClick = styled.TouchableOpacity`
   
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    margin-top: 14%;
`;
export const ButtomArea = styled.SafeAreaView`
    width: 100%;
    height:25%;
    background-color: #fff;
    align-items:center;
    justify-content: center;
`;
export const InfoArea = styled.SafeAreaView`
    width: 100%;
    height:75%;
    border-bottom-right-radius:35px;
    border-bottom-left-radius:35px;
    justify-content: center;
    padding-left:20px;
    background-color: #934fd6;
  
   
`;
export const InputArea = styled.SafeAreaView`
    width:90%;
    height:340px;
    align-items: center;
    padding-top: 8%;
    margin-top:2%;
    margin-left:2.5%;
`;