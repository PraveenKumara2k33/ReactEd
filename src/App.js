import Content from "./Content";
import Navs from "./Navs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidingc from "./Slidingc";
import { About } from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navs />
      <Slidingc />
      <About />
      <br />
      <Content />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
