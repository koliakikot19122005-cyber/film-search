import { useState } from 'react'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import SideBar from './components/SideBar.tsx'
import Nav from './components/Nav.tsx'
import AdminPage from './pages/AdminPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminCreatePage from './pages/AdminCreatePage.tsx'
function App() {
  const [count, setCount] = useState(0)
/*
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    }

  ]);

*/


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin/create" element={<AdminCreatePage />} />
        </Routes>
            <Footer />
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* <AdminPage /> */}

  
    </>
  )
}

export default App
// бази данних подивитись
//big data переглянути 
// файловий сервер api server . почтовий, dns сервер