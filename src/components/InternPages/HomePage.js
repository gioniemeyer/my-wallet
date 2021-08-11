/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import {Container, Header, Register, Buttons, Button, Warn, Transactions} from "./HomePageStyle";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router";
import Transaction from "./Transaction";
import Total from "./Total";

export default function HomePage() {
	let history = useHistory();
	const { token } = useContext(UserContext);
	const localToken = JSON.parse(localStorage.getItem("token"));

	const [user, setUser] = useState("");
	const [transactions, setTransactions] = useState([]);
    
	useEffect(() => {
		const config = {
			headers: { Authorization: `Bearer ${token || localToken}`}
		};
		const request = axios.get(
			`${process.env.REACT_APP_API_BASE_URL}/home`,
			config);

		request.then((res) => {
			setUser(res.data.user);
			setTransactions(res.data.transactions);
		});
		request.catch(() => history.push("/sign-in"));
	}, []);

	function signOut() {
		const config = {
			headers: { Authorization: `Bearer ${token || localToken}`}
		};
        
		const req = axios.get(
			`${process.env.REACT_APP_API_BASE_URL}/sign-out`,
			config);

		req.then(() => {
			localStorage.removeItem("token");
			history.push("/sign-in");
		});

	}

	return(
		<Container>
			<Header>
				<h1>Olá, {user}</h1>
				<RiLogoutBoxRLine onClick={signOut}/>
			</Header>
			<Register>
				{
					transactions.length === 0 ?
						<Warn>Não há registros de entrada ou saída</Warn> :
						<>
							<Transactions>
								{transactions.map(t => <Transaction key={t.id} t={t}/>)}
							</Transactions>
							<Total transactions={transactions}/>
						</>
				}
			</Register>
			<Buttons>
				<Button onClick={() => history.push("/new-entry")}>
					<AiOutlinePlusCircle/>
					<p><strong>Nova entrada</strong></p>
				</Button>
				<Button onClick={() => history.push("/new-expense")}>
					<AiOutlineMinusCircle/>
					<p><strong>Nova saída</strong></p>
				</Button>
			</Buttons>
		</Container>
	);
}