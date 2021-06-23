import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {Container, Form, Button} from "./Style"
import axios from 'axios';
import UserContext from "../../contexts/UserContext"
export default function SignInPage() {

    let history = useHistory();
    const { token, setToken } = useContext(UserContext);
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function login(e) {
        e.preventDefault();

        const body = {email, password};

        const promise = axios.post("http://localhost:4000/sign-in", body);

        promise.then(res => {
            setLoad(false);
            // setToken(res.data);
            localStorage.setItem("token", JSON.stringify(res.data));
            setToken(JSON.parse(localStorage.getItem("token")))
            console.log(token)
            history.push("/");
        });

        promise.catch(err => {
            alert(err);
        })
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={(e) => login(e)}>
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
                <Button disabled={load} type="submit">
                    <strong>Entrar!</strong>
                </Button>
            </Form>
            <p onClick={() => history.push('/subscribe')}><strong>Primeira vez? Cadastre-se!</strong></p>
        </Container>
    )
}