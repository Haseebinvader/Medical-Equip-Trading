import Home from "./pages/home/Home"
import Services from "./pages/services/Services"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
