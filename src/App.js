import { Route, Switch } from "react-router";
import "./App.css";
import CompleteSurah from "./components/CompleteSurah";
import Footer from "./components/Footer";
import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <ItemContainer />
        </Route>
        <Route path="/surah/:surahNumber" exact>
          <CompleteSurah />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
