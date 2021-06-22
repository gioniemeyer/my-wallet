import axios from 'axios'
import { useState } from 'react';
import {Container, Header, Register, Buttons, Button} from './Style';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import logout from "../.././images/logout.png"

export default function HomePage() {
    

    return(
        <Container>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={logout}></img>
            </Header>
            <Register>
                <p>Não há registros de entrada ou saída</p>
            </Register>
            <Buttons>
                <Button>
                    <p>Nova entrada</p>
                    <AiOutlinePlusCircle/>
                </Button>
                <Button>
                    <p>Nova saída</p>
                    <AiOutlineMinusCircle/>
                </Button>
            </Buttons>
        </Container>
    )
}