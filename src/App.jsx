import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
