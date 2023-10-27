import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea,
    ServiceAreaNews,
    NewsTitle
} from "./styles"
import { Image } from 'react-native';


export default () => {
    return (
        <Container>
            <ServiceArea>
                <TextTitle>Noticias</TextTitle>
            </ServiceArea>
            <ServiceAreaNews>
                <Image
                    source={require('../../assets/sessao.jpeg')}
                />
            </ServiceAreaNews>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Comunidade</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <NewsTitle>Sessão de Orientação para Alunos de Graduação na biblioteca no dia 27/10/2023</NewsTitle>
            </ServiceArea>
        </Container>
    )
}
