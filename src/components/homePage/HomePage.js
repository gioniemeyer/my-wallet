import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import {Container, Header, Register, Buttons, Button, Warn} from './Style';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import UserContext from "../../contexts/UserContext";

export default function HomePage() {
    const { token } = useContext(UserContext);
    const [user, setUser] = useState('');
    const localToken = JSON.parse(localStorage.getItem("token"));
    
    
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
                <h1>Olá, {user.name}</h1>
                <RiLogoutBoxRLine/>
            </Header>
            <Register>
                <Warn>Não há registros de entrada ou saída</Warn>
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