import Ordenes from './componentes/screens/Ordenes'
import { Provider } from "react-redux";
import  store  from "./store";

function App() {
  return (
    <>
        <Provider store={store}>
          <Ordenes />
        </Provider>
    </>
  );
}

export default App;
