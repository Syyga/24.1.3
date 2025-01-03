import Nav from "./header/Nav.js";
import Main from "./body/Main.js";
import Footer from "./footer/Footer.js";
import "./App.css"; //폰트

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
