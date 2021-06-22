import { useState } from "react";
import { useHistory } from "react-router";
import {Container, Form, Button} from "./Style"
import axios from 'axios';

export default function SubscribePage() {
    const history = useHistory();

    const [load, setLoad] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    function createUser() {
        setLoad(true);
        if(password !== confirmedPassword) return alert("Senhas não estão iguais");
        
        const body = {name, email, password, confirmedPassword};

        const req = axios.post('http://localhost:4000/subscribe', body);

        req.then(() => {
            setLoad(false);
            history.push('/sign-in');
        });

        req.catch(err => {
            alert(err);
        })
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={createUser}>
                <input
                    disabled={load}
                    type='text'
                    value={name}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />
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
                <input
                    disabled={load}
                    type='password'
                    value={confirmedPassword}
                    placeholder="Confirme a senha"
                    onChange={e => setConfirmedPassword(e.target.value)}
                />
                <Button disabled={load} type="submit"><strong>Cadastrar</strong></Button>
            </Form>
            <p onClick={() => history.push('/sign-in')}><strong>Já tem uma conta? Entre agora!</strong></p>
        </Container>
    )
}

