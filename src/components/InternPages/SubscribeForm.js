/* eslint-disable react/react-in-jsx-scope */
import { Form, Button} from "../../styles/componentsStyle";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SubscribeForm() {
	let history = useHistory();

	const [load, setLoad] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmedPassword, setConfirmedPassword] = useState("");

	function createUser(e) {
		e.preventDefault();
		setLoad(true);
		if(password !== confirmedPassword) return alert("Senhas não estão iguais");
        
		const body = {name, email, password};

		// eslint-disable-next-line no-undef
		const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/subscribe`, body);

		req.then(() => {
			setLoad(false);
			history.push("/sign-in");
		});

		req.catch(err => {
			const statusCode = err.response.status;
			if(statusCode === 409) {
				alert("E-mail já cadastrado");
			} else {
				alert("Favor preencher os campos corretamente");
			}
			setLoad(false);
		});
	}
	return (
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
	);
}