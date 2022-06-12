import "./App.css";
import { Header } from "./components/Header";
// import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { ChakraProvider } from "@chakra-ui/react";
import { Mid } from "./components/Mid";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        {/* <Mid /> */}
        <Skills />
        <Contact />
      </ChakraProvider>
    </>
  );
}

export default App;
