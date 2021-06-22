import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignInPage from "./login/SignInPage";
import HomePage from "./homePage/HomePage";
import SubscribePage from "./login/SubscribePage";

export default function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}