import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import GameOverview from "./pages/games";

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/games" element={<GameOverview/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App;
