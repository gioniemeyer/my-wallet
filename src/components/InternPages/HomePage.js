import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import {Container, Header, Register, Buttons, Button, Warn, Transactions} from './HomePageStyle';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import UserContext from "../../contexts/UserContext";
import { useHistory } from 'react-router';
import Transaction from './Transaction';
import Total from './Total';

export default function HomePage() {
    let history = useHistory();
    const { token } = useContext(UserContext);
    const localToken = JSON.parse(localStorage.getItem("token"));

    const [user, setUser] = useState('');
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token || localToken}`}
          };
          const reqUser = axios.get(
            "http://localhost:4000/home",
            config);

          reqUser.then((res) => setUser(res.data));
          reqUser.catch(() => history.push("/sign-in"));

          const secondReq = axios.get(
            "http://localhost:4000/register",
            config);

            secondReq.then((res) => setTransactions(res.data));
    }, []);

    function signOut() {
        const config = {
            headers: { Authorization: `Bearer ${token || localToken}`}
          };
        
          const req = axios.get(
            "http://localhost:4000/sign-out",
            config);

        req.then(() => {
            localStorage.removeItem('token');
            history.push('/sign-in');
        });

    }

    return(
        <Container>
            <Header>
                <h1>Olá, {user.name}</h1>
                <RiLogoutBoxRLine onClick={signOut}/>
            </Header>
            <Register>
                {
                    transactions.length === 0 ?
                        <Warn>Não há registros de entrada ou saída</Warn> :
                        <>
                        <Transactions>
                            {transactions.map(t => <Transaction t={t}/>)}
                        </Transactions>
                        <Total transactions={transactions}/>
                        </>
                }
            </Register>
            <Buttons>
                <Button onClick={() => history.push('/new-entry')}>
                    <AiOutlinePlusCircle/>
                    <p><strong>Nova entrada</strong></p>
                </Button>
                <Button onClick={() => history.push('/new-expense')}>
                    <AiOutlineMinusCircle/>
                    <p><strong>Nova saída</strong></p>
                </Button>
            </Buttons>
        </Container>
    )
}