import axios from 'axios'
import { useState } from 'react';
import {Container, Header, Register, Buttons, Button} from './Style';

import logout from "../.././images/logout.png"
import expense from "../.././images/expense.png"
import profit from "../.././images/profit.png"

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
                    <img src={profit}></img>
                </Button>
                <Button>
                    <p>Nova saída</p>
                    <img src={expense}></img>
                </Button>
            </Buttons>
        </Container>
    )
}