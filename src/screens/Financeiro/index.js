import React, { useState } from 'react';
import { View, Text, FlatList, TouchableHighlight, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea
} from "./styles"

import styled from "styled-components/native";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
    const [selected, setSelected] = React.useState("");


    const [paidFees, setPaidFees] = useState([
        { id: '1', book: 'Clean Code: A Handbook..', reason: 'Atraso na devolução', deliveryDate: '2023-10-10', returnDate: '2023-10-01', value: 20.0 },
        { id: '2', book: 'Design Patterns: Element...', reason: 'Dano no livro', deliveryDate: '2023-09-15', returnDate: '2023-09-10', value: 15.0 },
        { id: '3', book: 'The Pragmatic Programme..', reason: 'Perda do livro', deliveryDate: '2023-08-20', returnDate: '2023-08-15', value: 30.0 },
    ]);

    const [unpaidFees, setUnpaidFees] = useState([
        { id: '4', book: 'Code Complete: A Practical Ha..', reason: 'Atraso na devolução', deliveryDate: '2023-07-25', returnDate: '2023-07-20', value: 25.0 },
        { id: '5', book: 'Introduction to Algorithms', reason: 'Dano no livro', deliveryDate: '2023-06-30', returnDate: '2023-06-25', value: 18.0 },
    ]);


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFee, setSelectedFee] = useState({});

    const handleGenerateQRCode = () => {
        // Lógica para gerar o QR code do pagamento via Pix
        console.log('Gerando QR code...');
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.book}</Text>
            <TouchableHighlight
                style={styles.viewButton}
                onPress={() => {
                    setSelectedFee(item);
                    setModalVisible(true);
                }}
            >
                <Text style={styles.viewButtonText}>Exibir</Text>
            </TouchableHighlight>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 50,
        },
        section: {
            marginBottom: 30,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left',
            marginBottom: 10,
            color: '#7186FF'
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
        viewButton: {
            backgroundColor: '#7186FF',
            padding: 10,
            borderRadius: 5,
        },
        viewButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 5,
            width: '80%',
        },
        modalTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        generateQRButton: {
            backgroundColor: 'lightblue',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
        },
        generateQRButtonText: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        closeButton: {
            backgroundColor: '#7186FF',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
        },
        closeButtonText: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Taxas da</HeaderTitle>
                </HeaderArea>
                <HeaderArea>
                    <HeaderTitle>Biblioteca</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Taxas Pagas</Text>
                    <FlatList
                        data={paidFees}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Taxas a Pagar/Em Atraso</Text>
                    <FlatList
                        data={unpaidFees}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{selectedFee.book}</Text>
                            <Text>Razão do Atraso: {selectedFee.reason}</Text>
                            <Text>Data de Entrega: {selectedFee.deliveryDate}</Text>
                            <Text>Data de Empréstimo: {selectedFee.returnDate}</Text>
                            <Text>Valor: {selectedFee.value}</Text>
                            {unpaidFees.includes(selectedFee) && (
                                <TouchableOpacity style={styles.generateQRButton} onPress={handleGenerateQRCode}>
                                    <Text style={styles.generateQRButtonText}>Gerar QR Code</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableHighlight
                                style={styles.closeButton}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        </Container>
    )
}