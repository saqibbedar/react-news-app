import { Header, Footer } from "./components/components";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <div className="w-[80%] m-auto">
        <Header />
        <hr className="bg-black h-1" />
        <Home/>
      </div>
      <Footer/>
    </>
  )
}

export default App

