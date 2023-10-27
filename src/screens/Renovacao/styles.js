import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FAE8B1;

`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #7186FF;
`;

export const TextTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const ServiceArea = styled.View`
    width: 100%;
    height: 100px;
    background-color: #54B4C7;
    flex-direction: row;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 20px;
    justify-content: center;
`;

export const ContainerArea = styled.SafeAreaView`
    height: 110px;
    justifyContent: 'center';
    alignItems: 'center';
    position: fixed;
    top: 15px;
    left: 0;
    right: 0;
`;