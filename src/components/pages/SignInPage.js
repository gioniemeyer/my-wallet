/* eslint-disable react/react-in-jsx-scope */
import { useHistory } from "react-router-dom";
import { Container } from "../../styles/componentsStyle";
import SignInForm from "../InternPages/SignInForm";

export default function SignInPage() {
	let history = useHistory();

	return(
		<Container>
			<h1>MyWallet</h1>
			<SignInForm />
			<p onClick={() => history.push("/subscribe")}><strong>Primeira vez? Cadastre-se!</strong></p>
		</Container>
	);
}