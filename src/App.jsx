import { BrowserRouter } from "react-router-dom";
import { } from './components'; 



const App = ()  => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
      <Navbar/>
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
