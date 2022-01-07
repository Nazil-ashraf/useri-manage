import Home from "./home";
import {Route, Switch} from "react-router-dom";
import Roleslink from "./pages/roles-link";


const Routes = () => {
    return (
        <div className="routes">
            <Switch>
                {/*<Route path="/" component={Header} />*/}
                <Route path="/" exact component={Home}/>
                <Route path="/roles" exact component={Roleslink}/>
                {/*<Route path="/login" exact component={Login}/>*/}
                {/*<Route path="/signup" exact component={SignUp}/>*/}
            </Switch>
        </div>
    )
}
export default Routes