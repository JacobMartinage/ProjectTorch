import { BrowserRouter } from "react-router-dom";
import { Navbar, Contact, Hero, About, Restaurants , Team } from './components'; 



const App = ()  => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-background">
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Restaurants/>
      <Team/>
      <Contact/>




    
      </div>
      </BrowserRouter>


       
  )
}

export default App
