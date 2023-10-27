import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home'
import Search from '../screens/Search'
import Reserva from '../screens/Reserva'
import Monitoramento from '../screens/Monitoramento'
import Renovacao from '../screens/Renovacao'
import Emprestimos from '../screens/Emprestimos'
import Comunidade from '../screens/Comunidade'
import Financeiro from '../screens/Financeiro'
import Configuracao from '../screens/Configuracao'
import Suporte from '../screens/Suporte'

import CustomTabBar from "../components/CustomTabBar";
import User from "../screens/User";

const Tab = createBottomTabNavigator();

export default () =>(
    <Tab.Navigator tabBar={props=><CustomTabBar{...props}/>} screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Configuracao" component={Configuracao}/>
        <Tab.Screen name="Reserva" component={Reserva}/>
        <Tab.Screen name="Renovacao" component={Renovacao}/>
        <Tab.Screen name="Emprestimos" component={Emprestimos}/>
        <Tab.Screen name="Suporte" component={Suporte}/>
        <Tab.Screen name="Financeiro" component={Financeiro}/>
        <Tab.Screen name="User" component={User}/>
        <Tab.Screen name="Comunidade" component={Comunidade}/>
    </Tab.Navigator>
);