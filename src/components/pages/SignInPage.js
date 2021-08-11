/* eslint-disable react/react-in-jsx-scope */
import { Container } from "../../styles/componentsStyle";
import SignInForm from "../InternPages/SignInForm";

export default function SignInPage() {

	return(
		<Container>
			<h1>MyWallet</h1>
			<SignInForm />
			<p onClick={() => history.push("/subscribe")}><strong>Primeira vez? Cadastre-se!</strong></p>
		</Container>
	);
}