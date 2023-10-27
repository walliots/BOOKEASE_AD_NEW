import React from "react";
import styled from "styled-components/native";

import HomeIcon from "../assets/homeAPP2.svg"
import SearchIcon from "../assets/searchAPP4.svg"
import SupportIcon from "../assets/supportAPP2.svg"
import ConfigIcon from "../assets/configAPP2.svg"

const TabArea = styled.View`
    height: 60px;
    background-color: #7186FF;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;



export default ({state, navigation}) =>{

    const goTo = (screenName) =>{
        navigation.navigate(screenName);
    }

    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>goTo('User')}>
                <ConfigIcon style={{opacity: state.index===2? 1 : 0.5}}  width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Suporte')}>
                <SupportIcon style={{opacity: state.index===3? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
        </TabArea>
    );
}