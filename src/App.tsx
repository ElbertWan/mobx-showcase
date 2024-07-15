import "./App.css";
import Homepage from "./pages/homepage";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "./stores/RootStoreContext";
import { makeStore } from "./stores/storeFactory";

function App() {
  return (
    <RootStoreContext.Provider value={makeStore()}>
      <div className="App">
        <header className="App-header">
          <Homepage />
        </header>
      </div>
    </RootStoreContext.Provider>
  );
}

export default observer(App);
