import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignInPage from "./login/SignInPage";
import HomePage from "./homePage/HomePage";
import SubscribePage from "./login/SubscribePage";
import { useContext, useState } from "react";
import UserContext from ".././contexts/UserContext";

export default function App() {

    const [token, setToken] = useState('');
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
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )
}