import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessagebutton,
    SignMessagebuttonText,
    SignMessagebuttonTextBold
} from "./styles"

import Api from "../../Api";

import { Alert, Text } from "react-native";
import BookEase from "../../assets/LogoBookNEW.svg";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"
import Matricula from "../../assets/matricula.svg"

import HomeIcon from "../../assets/home.svg"

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [matriculaField, setMatriculaField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    
    const handleSignClick = () => {
        navigation.reset({
            routes:[{name:'MainTab'}]
        });
    }

    return (
        <Container>
            <BookEase width="100%" height="160px" />

            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={Matricula}
                    placeholder="Digite sua matricula"
                    value={matriculaField}
                    onChangeText={t => setMatriculaField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessagebutton onPress={handleMessageButtonClick}>
                <SignMessagebuttonText>Ainda não possui uma conta?</SignMessagebuttonText>
                <SignMessagebuttonTextBold>Cadastre-se</SignMessagebuttonTextBold>
            </SignMessagebutton>

        </Container>
    )
}
