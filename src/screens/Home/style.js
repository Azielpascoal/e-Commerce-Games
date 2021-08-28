import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const Top = styled.SafeAreaView`
  width: 100%;
  height: 200px;
  background-color: #f7d86d;
`;
export const ProductArea = styled.ScrollView`
  width: 100%;
  flex: 1;
  border-top-right-radius: 35px;
`;
export const ProductCard = styled.SafeAreaView`
  width: 95%;
  height: 150px;
  border-radius: 15px;
  border-color: #f1f1f1;
  border-width: 1px;
  flex-direction: row;
`;
export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;
export const ProductInfoArea = styled.SafeAreaView`
  width: 70%;
  height: 100%;
`;
export const InfoText = styled.Text`
  font-size: 14px;
  font-family: Poppins-Medium;
  color: #1a2a3a;
`;
export const ProductInfoText = styled.Text`
  font-size: 12px;
  font-family: Poppins-Regular;
  color: #1a2a3a;
`;
export const CartButtom = ``;
export const CartImage = styled.Image`
  width: 25px;
  height: 25px;
`;
