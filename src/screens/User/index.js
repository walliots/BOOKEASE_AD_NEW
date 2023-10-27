import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
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

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(previousState => !previousState);
    };

    const toggleNotification = () => {
        setIsNotificationEnabled(previousState => !previousState);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        settingItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginVertical: 10,
            left:20
        },
    });

    return (

        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Configuração</HeaderTitle>
                </HeaderArea>
            </ContainerArea>

                <View style={styles.settingItem}>
                    <Text>Modo Escuro</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text>Notificações</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNotification}
                        value={isNotificationEnabled}
                    />
                </View>


        </Container>
    )
}