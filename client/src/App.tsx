import { useState } from 'react'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import SideBar from './components/SideBar.tsx'
import Nav from './components/Nav.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />

      <div className="main-container">
        <SideBar />
        <Main />
      </div>

      <Footer />
    </>
  )
}

export default App
// бази данних подивитись
//big data переглянути 
// файловий сервер api server . почтовий, dns сервер