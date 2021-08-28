import React from 'react'
import {Container,Image,Text,Buttom} from './style'
import SplashImage from '../../assets/splash.gif'


export default function Splash(){
    return(
        <Container>
            <Image source={SplashImage}/>
            <Text>Olá !seja Bem-Vindo ao seu aplicativo de venda de jogos.Para começar clique em loja virtual.</Text>
            <Buttom>
                <Text>Loja virtual</Text>
            </Buttom>
        </Container>
    );
}