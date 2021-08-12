/* eslint-disable react/react-in-jsx-scope */
import { useHistory } from "react-router-dom";
import {Container } from "../../styles/componentsStyle";
import SubscribeForm from "../InternPages/SubscribeForm";

export default function SubscribePage() {
	let history = useHistory();
	
	return(
		<Container>
			<h1>MyWallet</h1>
			<SubscribeForm />
			<p onClick={() => history.push("/sign-in")}><strong>Já tem uma conta? Entre agora!</strong></p>
		</Container>
	);
}

