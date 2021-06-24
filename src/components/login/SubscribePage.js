import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Container, Form, Button} from "./Style"
import axios from 'axios';

export default function SubscribePage() {
    let history = useHistory();

    const [load, setLoad] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    function createUser(e) {
        e.preventDefault();
        setLoad(true);
        if(password !== confirmedPassword) return alert("Senhas não estão iguais");
        
        const body = {name, email, password};

        const req = axios.post('http://localhost:4000/subscribe', body);

        req.then(() => {
            setLoad(false);
            history.push('/sign-in');
        });

        req.catch(err => {
            setLoad(false);
            alert(err);
        })
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={e => createUser(e)}>
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
                <Button disabled={load} type="submit">
                    <p>Cadastrar</p>
                </Button>
            </Form>
            <p onClick={() => history.push('/sign-in')}><strong>Já tem uma conta? Entre agora!</strong></p>
        </Container>
    )
}

