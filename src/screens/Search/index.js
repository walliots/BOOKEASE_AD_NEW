import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea
} from "./styles"

import { Searchbar } from 'react-native-paper';

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

import Ionicons from '@expo/vector-icons/Ionicons';

export default () => {

    const handleSearch = () => {
        // Lógica para lidar com a pesquisa
        console.log('Pesquisando por:', searchText);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
        },
        column: {
            flexDirection: 'column',
        },
        button: {
            backgroundColor: 'white',
            padding: 15,
            margin: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: 'black',
            fontWeight: 'bold',
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            flex: 1,
            marginRight: 10,
            paddingHorizontal: 10,
        },
        submitButton: {
            backgroundColor: '#7186FF',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
        submitButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    const [selected, setSelected, selectedButton, setSelectedButton, searchText, setSearchText] = React.useState("");

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName === selectedButton ? null : buttonName);
    };

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Pesquisar</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <Searchbar
                placeholder="Busca"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Artigo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Classificação</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Assunto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Código</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Categoria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Editora</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSearch}>
                <Text style={styles.submitButtonText}>Pesquisar</Text>
            </TouchableOpacity>


        </Container>
    )
}