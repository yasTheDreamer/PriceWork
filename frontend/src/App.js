import "./App.css";
import { Route, Switch } from "react-router-dom";

import Background from "./atoms/background/Background";
import Header from "./organisms/header/Header";
import Form from "./organisms/form/Form";

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
