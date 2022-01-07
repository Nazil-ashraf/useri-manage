import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";




const App = () => {
    return (
        <Router>

            <div>
                {/*<Header/>*/}
                <Routes/>

                {/*<Footer/>*/}
            </div>
        </Router>
    )
}

export default App