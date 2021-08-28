import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const Top = styled.SafeAreaView`
  width: 100%;
  height: 250px;
  background-color: #f7d86d;
  justify-content: center;
  align-items: center;
`;
export const ProductArea = styled.ScrollView`
  width: 100%;
  flex: 1;
  border-top-right-radius: 35px;
  margin-top: -60px;
  background-color: #fff;
  padding:4%;
`;
export const ProductCard = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  border-color: #f1f1f1;
  border-width: 1px;
  flex-direction: row;
  align-self: center;
  margin-top: 4%;
  justify-content: center;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  background-color: #fafafa;
  border-radius: 8px;
`;
export const ProductInfoArea = styled.SafeAreaView`
  width: 65%;
  height: 100px;
  margin-left: 2%;
  border-color:#fafafa;
  border-width: 1px;
  border-radius:8px;
  justify-content: center;
  padding:2%;
`;
export const InfoText = styled.Text`
  font-size: 16px;
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
