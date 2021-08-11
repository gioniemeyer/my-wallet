/* eslint-disable react/react-in-jsx-scope */
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from "react";
import UserContext from ".././contexts/UserContext";

import SignInPage from "./login/SignInPage";
import HomePage from "./InternPages/HomePage";
import SubscribePage from "./login/SubscribePage";
import ProfitPage from "./InternPages/ProfitPage";
import ExpensePage from "./InternPages/ExpensePage";

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