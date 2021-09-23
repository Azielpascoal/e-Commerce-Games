import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const Top = styled.SafeAreaView`
  width: 100%;
  height: 320px;
  background-color: #fff;
  justify-content: center;
  align-items: center; 
`;
export const TopInfo = styled.SafeAreaView`
  width:90%;
  height: 80px;
  align-self: center;
  align-self: center;
  justify-content:center;
`;
export const TopInfoArea = styled.SafeAreaView`
  width: 92%;
  height: 180px;
  border-radius:22px;
  background-color: #934fd6;
  justify-content: center;
  align-items: center; 
  flex-direction: row;
  margin-top: 2%;
`;
export const TopInfoAreaComp = styled.SafeAreaView`
  width:90%;
  height:40px;
  align-items:center;
  justify-content: center;
  border-color:#fafafa;
  border-width:1px;
  align-self:center;
  margin: 4%;


`;
export const TopImage = styled.Image`
  width:250px;
  height:170px;
`;
export const TopInfoText = styled.Text`
  font-size: 16px;
  font-family: Poppins-Medium;
  color: #fff;
  
`;
export const TopButtom = styled.TouchableOpacity`
  width:120px;
  height:40px;
  background-color: #6200c4;
  align-items: center;
  justify-content: center;
  border-radius:8px;
  margin-top: 16%;
`;
export const TopButtomText = styled.Text`
  font-size: 12px;
  font-family: Poppins-Regular;
  color: #fff;
`;

export const ProductArea = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: #fff;
  padding:4%;
`;
export const ProductCard = styled.SafeAreaView`
  width: 100%;
  height: 180px;
  border-radius: 15px;
  border-color: #f1f1f1;
  border-width: 1px;
  flex-direction: row;
  align-self: center;
  margin-top: 4%;
  justify-content: center;
  align-items: center;
  margin-bottom: 8%;
`;
export const ProductImage = styled.Image`
  width: 120px;
  height: 150px;
  background-color: #fafafa;
  border-radius: 8px;
`;
export const ProductInfoArea = styled.SafeAreaView`
  width: 60%;
  height: 150px;
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
  color: #934fd6;
  text-align:center;
`;
export const ProductInfoText = styled.Text`
  font-size: 12px;
  font-family: Poppins-Regular;
  color: #934fd6;
`;
export const CartButtom = styled.TouchableOpacity`
  width:90%;
  height:40px;
  background-color: #934fd6;
  align-items: center;
  justify-content: center;
  border-radius:8px;
  align-self:center;
  margin-top: 4%;
`;
export const CartImage = styled.Image`
  width: 25px;
  height: 25px;
  tint-color:#fff;
`;
