import { useState } from "react";
import { useHistory } from "react-router";
import {Container, Form, Button} from "./Style"
import axios from 'axios';

export default function SignInPage() {
    const history = useHistory();

    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function login() {
        setLoad(true);
        history.push('/');
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={login}>
                <input
                    disabled={load}
                    type='email'
                    value={email}
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    disabled={load} 
                    type='password'
                    value={password}
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button disabled={load} type="submit"><strong>Entrar!</strong></Button>
            </Form>
            <p onClick={() => history.push('/subscribe')}><strong>Primeira vez? Cadastre-se!</strong></p>
        </Container>
    )
}