import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea,
    ContainerMain
} from "./styles"

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
    const [selected, setSelected] = React.useState("");

    const [title, setTitle] = useState('');
    const [publicationType, setPublicationType] = useState('');
    const [year, setYear] = useState('');
    const [edition, setEdition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSearch = () => {
        // Lógica para lidar com a busca
        console.log('Realizando busca...');
    };

    const styles = StyleSheet.create({
        input: {
            width: '90%',
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 10,
            marginLeft:20,
            marginTop: 20,
            backgroundColor: 'white'
        },
        searchButton: {
            width: '90%',
            backgroundColor: '#7186FF',
            padding: 15,
            borderRadius: 5,
            marginTop: 20,
            marginLeft:20
        },
        searchButtonText: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    return (

        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Reservar livro</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <TextInput
                style={styles.input}
                placeholder="Título a ser pesquisado"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo de publicação"
                value={publicationType}
                onChangeText={setPublicationType}
            />
            <TextInput
                style={styles.input}
                placeholder="Ano"
                value={year}
                onChangeText={setYear}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Edição"
                value={edition}
                onChangeText={setEdition}
            />
            <TextInput
                style={styles.input}
                placeholder="Dt. de início da reserva"
                value={startDate}
                onChangeText={setStartDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Dt. final da reserva"
                value={endDate}
                onChangeText={setEndDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Status"
                value={status}
                onChangeText={setStatus}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>
        </Container>
    )
}