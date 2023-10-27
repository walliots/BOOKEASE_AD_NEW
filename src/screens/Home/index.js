import React from "react";
import { Text } from "react-native";
import Services from "../../components/Services";

import styled from "styled-components/native";

import Reserva from "../../assets/reserva.svg"

import Renovar from "../../assets/renovar.svg"

import Livro from "../../assets/livro.svg"

import Financeiro from "../../assets/financeiro.svg"

import Comunidade from "../../assets/community.svg"

import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea
} from "./styles"
import { useNavigation } from "@react-navigation/native";

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>INÍCIO</HeaderTitle>
            </HeaderArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Reserva')}>
                    <TextTitle>Reservar Livro</TextTitle>
                    <Reserva width="30" height="30" fill="#FFFFFF"></Reserva>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Renovacao')}>
                    <TextTitle>Renovar Empréstimo</TextTitle>
                    <Renovar width="30" height="30" fill="#FFFFFF"></Renovar>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Emprestimos')}>
                    <TextTitle>Empréstimos</TextTitle>
                    <Livro width="30" height="30" fill="#FFFFFF"></Livro>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Financeiro')}>
                    <TextTitle>Taxas da biblioteca</TextTitle>
                    <Financeiro width="30" height="30" fill="#FFFFFF"></Financeiro>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Comunidade')}>
                    <TextTitle>Comunidade</TextTitle>
                    <Comunidade width="30" height="30" fill="#FFFFFF"></Comunidade>
                </TabItem>
            </ServiceArea>

        </Container>
    )
}