import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FAE8B1;
    justify-content: center;
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
    width: 90%;
    height: 90px;
    background-color: #7186FF;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 20px;
    justify-content: center;
    left:20px;
`;

