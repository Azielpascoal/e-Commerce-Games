import React from 'react'
import styled from 'styled-components/native'



export const InputArea= styled.SafeAreaView`
    width:98%;
    height:48px;
    flex-direction: row;
    background-color:#6600c4;
    border-radius:12px;
    border-width:1px;
    border-color: ${props => props.IsError ? "#E41C31" : "#6200c4" && props.IsSuccess ? "#55BC7E" : "#6200c4" };
    align-items: center;
    margin-top: 8%;
   

`;

export const Input = styled.TextInput`
    height:80%;
    width:75%;
    font-size:12px;
    font-family: Poppins-Regular;
    color:#1A2A3A;
    margin-left: 15px;
    padding-top:3px;
    
`;
export const Icon = styled.Image`
    width: 24px;
    height: 24px;
    margin-left: 2%;
    border-radius: 8px;
    tint-color:#fff;
`;