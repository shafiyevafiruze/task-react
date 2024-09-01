import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Last from "./components/last/Last";
import Main from "./components/main/Main";
import Popular from "./components/popular/Popular";
import Section from "./components/section/Section";
import Upcoming from "./components/upcoming/Upcoming";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Popular />
      <Upcoming />
      <Section />
      <Last />
      <Footer />
    </>
  );
}

export default App;
