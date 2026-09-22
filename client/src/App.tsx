import { useState } from 'react'
import Footer from './components/Footer.tsx'
import Nav from './components/Nav.tsx'
import AdminPage from './pages/AdminPage.tsx'
import HomePage from './pages/HomePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminCreatePage from './pages/AdminCreatePage.tsx'
import FilmPage from './pages/FilmPage.tsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film-page/:id"element={<FilmPage/>}/>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin/create" element={<AdminCreatePage />} />
        </Routes>
            <Footer />
      </BrowserRouter>
    </>
  )
}

export default App