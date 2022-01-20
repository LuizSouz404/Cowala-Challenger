import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Summary />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
