import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* This is for rendring the dynamic data */}
      <Footer />
    </>
  );
}

export default App;
