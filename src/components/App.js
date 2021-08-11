/* eslint-disable react/react-in-jsx-scope */
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from "react";
import UserContext from ".././contexts/UserContext";

import SignInPage from "../components/pages/SignInPage";
import HomePage from "../components/pages/HomePage";
import SubscribePage from "../components/pages/SubscribePage";
import ProfitPage from "../components/pages/ProfitPage";
import ExpensePage from "../components/pages/ExpensePage";

export default function App() {

	const [token, setToken] = useState("");
	return (
		<BrowserRouter>
			<UserContext.Provider value={{ token, setToken }}>
				<Switch>
					<Route path='/subscribe' exact>
						<SubscribePage />                    
					</Route>
					<Route path='/sign-in' exact>
						<SignInPage />                    
					</Route>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/new-entry' exact>
						<ProfitPage />
					</Route>
					<Route path='/new-expense' exact>
						<ExpensePage />
					</Route>
				</Switch>
			</UserContext.Provider>
		</BrowserRouter>
	);
}