import React, { useState } from 'react';
import { View, Text, FlatList, TouchableHighlight, Modal, StyleSheet } from 'react-native';
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
    const [selected, setSelected] = React.useState("");

    const [data, setData] = useState([
        { id: '1', title: 'Clean Code', loanDate: '2023-10-15', returnDate: '2023-11-15' },
        { id: '2', title: 'Design Patterns', loanDate: '2023-09-20', returnDate: '2023-10-20' },
        { id: '3', title: 'The Pragmatic Programmer', loanDate: '2023-08-25', returnDate: '2023-09-25' },
        { id: '4', title: 'Code Complete', loanDate: '2023-07-30', returnDate: '2023-08-30' },
        { id: '5', title: 'Introduction to Algorithms', loanDate: '2023-06-05', returnDate: '2023-07-05' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableHighlight
                style={styles.viewButton}
                onPress={() => {
                    setSelectedItem(item);
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
                    <HeaderTitle>Empréstimos</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
                            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                            <Text>Data de Empréstimo: {selectedItem.loanDate}</Text>
                            <Text>Data de Devolução: {selectedItem.returnDate}</Text>
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