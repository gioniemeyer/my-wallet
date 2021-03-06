/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import {Container, Header, Form, Button} from "../../styles/TransactionsStyle";
import UserContext from "../../contexts/UserContext";
import {useHistory} from "react-router";

export default function ExpensePage() {
	let history = useHistory();
	const { token } = useContext(UserContext);
	const localToken = JSON.parse(localStorage.getItem("token"));
    
	const [value, setValue] = useState("");
	const [description, setDescription] = useState("");
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if(!token && !localToken) {
			history.push("/sign-in");
		}
	},[]);

    
	function inputExpense(e) {
		e.preventDefault();
		setDisabled(true);
		const body = {value, description};
		const config = {
			headers: {Authorization: `Bearer ${token || localToken}`}
		};
		// eslint-disable-next-line no-undef
		const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/new-expense`, body, config);

		req.then(() => {
			setDisabled(false);
			history.push("/");
		});

		req.catch(()=> {
			alert("Favor preencher todos os campos corretamente!");
			setDisabled(false);
		});
	}


	return(
		<Container>
			<Header>
				<h1>Nova saída</h1>
			</Header>

			<Form onSubmit={e => inputExpense(e)}>
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
				<Button type="submit">
					<p><strong>Salvar entrada</strong></p>
				</Button>
			</Form>

		</Container>
	);
}