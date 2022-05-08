import "./index.css";
import {
  Header,
  Banner,
  GettingStarted,
  Response,
  TheExtraordinaryCare,
  Footer,
} from "modules";

function App() {
  return (
    <div className="App">
      <div className="min-w-[320px] max-w-[1440px] mx-auto font-[Roboto,sans-serif]">
        <Header />
        <Banner />
        <GettingStarted />
        <Response />
        <TheExtraordinaryCare />
        <Footer />
      </div>
    </div>
  );
}

export default App;
