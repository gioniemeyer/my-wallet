import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import {Container, Header, Form, Button} from './TransactionsStyle';
import UserContext from "../../contexts/UserContext";

export default function ExpensePage() {
    const { token } = useContext(UserContext);
    const [user, setUser] = useState('');
    const localToken = JSON.parse(localStorage.getItem("token"));
    
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    
    useEffect(() => {
         
        const config = {
            headers: { Authorization: `Bearer ${token || localToken}`}
          };
          const req = axios.get(
            "http://localhost:4000/home",
            config);

          req.then((res) => setUser(res.data));
    }, []);

    return(
        <Container>
            <Header>
                <h1>Nova saída</h1>
            </Header>

            <Form>
                <input 
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={disabled}
                    type="number"
                    step="0.01"
                    min="0.00"
                />
                <input
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    disabled={disabled}
                    type="text"
                />
                <Button>
                    <p><strong>Salvar entrada</strong></p>
                </Button>
            </Form>

        </Container>
    )
}