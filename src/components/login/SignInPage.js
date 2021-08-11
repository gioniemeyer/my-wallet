/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {Container, Form, Button} from "./Style";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
export default function SignInPage() {

	let history = useHistory();
	const { setToken } = useContext(UserContext);
	const [load, setLoad] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function login(e) {
		e.preventDefault();

		const body = {email, password};

		// eslint-disable-next-line no-undef
		const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);

		promise.then(res => {
			setLoad(false);
			localStorage.setItem("token", JSON.stringify(res.data));
			setToken(JSON.parse(localStorage.getItem("token")));
			history.push("/");
		});

		promise.catch(err => {
			const statusCode = err.response.status;
			if(statusCode === 404) {
				alert("E-mail não encontrado");
			} else {
				alert("Favor preencher os campos corretamente");
			}
			setLoad(false);        
		});
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
					<p>Entrar!</p>
				</Button>
			</Form>
			<p onClick={() => history.push("/subscribe")}><strong>Primeira vez? Cadastre-se!</strong></p>
		</Container>
	);
}