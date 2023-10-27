import React, { useState } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from "react-native";
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea
} from "./styles"

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {

    const [data, setData] = useState([
        { id: '1', title: 'Dom Casmurro' },
        { id: '2', title: 'Grande Sertão: Veredas' },
        { id: '3', title: 'Memórias Póstumas de Brás Cubas' },
    ]);

    const [message, setMessage] = useState('');

    const handleRenewal = (item) => {
        // Lógica para renovar o empréstimo
        console.log(`Renovando empréstimo de ${item.title}...`);
        // Mostrar a mensagem de renovação por 1 segundo
        setTimeout(() => {
            console.log(`Renovação do empréstimo de ${item.title} feita com sucesso!`);
        }, 1000);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 50,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
        },
        title: {
            fontSize: 18,
        },
        renewalButton: {
            backgroundColor: '#7186FF',
            padding: 10,
            borderRadius: 5,
        },
        renewalButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        message: {
            marginTop: 20,
            textAlign: 'center',
            color: 'green',
            fontSize: 16,
        }
    });

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableHighlight style={styles.renewalButton} onPress={() => handleRenewal(item)}>
                <Text style={styles.renewalButtonText}>Renovar</Text>
            </TouchableHighlight>
        </View>
    );

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Renovar</HeaderTitle>
                </HeaderArea>
                <HeaderArea>
                    <HeaderTitle>Empréstimos</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {message ? <Text style={styles.message}>{message}</Text> : null}
            </View>
        </Container>
    )
}