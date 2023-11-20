import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Update from "./pages/Update";
import PageNotFound from "./pages/errors/PageNotFound";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/project" Component={Project} />
          <Route path="/update" Component={Update} />
          <Route path="/redirect/:urlId" Component={Redirect} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
