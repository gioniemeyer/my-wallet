import {BrowseRouter, Switch, Route} from "react-router-dom";
import SignInPage from "./signIn/SignInPage";
import HomePage from "./homePage/HomePage";
import SubscribePage from "./subscribe/SubscribePage";

export default function App() {
    return (
        <BrowseRouter>
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
        </BrowseRouter>
    )
}