import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHomePage from './pages/user/UserHomePage.jsx'
import FieldsPage from './pages/user/FieldsPage.jsx'
import BookingPage from './pages/user/BookingPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/user/fields" element={<FieldsPage />} />
        <Route path="/user/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App