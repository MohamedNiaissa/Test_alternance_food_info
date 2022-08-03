import { render } from "@testing-library/react"
import Header from "./Header";
// import Main from "./Main";
import Produits from "./Produits"
import '../css/App.css'
import Diapo from "./Diapo";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  
    return(
      <>

        <Header />
        <Diapo />
        <Main/>
        {/* <Footer/> */}
        {/* <Produits /> */}
        
      </>
    )
  
  

}

export default App;
