import "./App.css";
import { Route, Switch } from "react-router-dom";

import Background from "./components/atoms/background/Background";
import Header from "./components/organisms/header/Header";
import Form from "./components/organisms/form/Form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Background />
          <Header />
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
