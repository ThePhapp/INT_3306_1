import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHomePage from './pages/user/UserHomePage.jsx'
import FieldsPage from './pages/user/FieldsPage.jsx'
import FieldDetailPage from './pages/user/FieldDetailPage.jsx'
import BookingPage from './pages/user/BookingPage.jsx'
import BookingPaymentPage from './pages/user/BookingPaymentPage.jsx'
import ReviewPage from './pages/user/ReviewPage.jsx'
import LoginPage from './pages/user/LoginPage.jsx'
import RegisterPage from './pages/user/RegisterPage.jsx'
import ForgotPasswordPage from './pages/user/ForgotPasswordPage.jsx'
import BookingStatusPage from './pages/user/BookingStatusPage.jsx'
import PolicyPage from './pages/user/PolicyPage.jsx'
import ContactPage from './pages/user/ContactPage.jsx'
import ApproveBookingsPage from './pages/manager/ApproveBookingsPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHomePage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/user/fields" element={<FieldsPage />} />
        <Route path="/user/fields/:id" element={<FieldDetailPage />} />
        <Route path="/user/booking" element={<BookingPaymentPage />} />
        <Route path="/user/bookings" element={<BookingPage />} />
        <Route path="/user/review" element={<ReviewPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/user/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/user/booking-status" element={<BookingStatusPage />} />
        <Route path="/user/policy" element={<PolicyPage />} />
        <Route path="/user/contact" element={<ContactPage />} />
        
        {/* Manager routes */}
        <Route path="/manager/approve" element={<ApproveBookingsPage />} />
      </Routes>
    </Router>
  )
}

export default App