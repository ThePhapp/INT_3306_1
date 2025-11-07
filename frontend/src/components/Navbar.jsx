import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="DHP Logo" />
        </Link>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/user/fields">Danh sách sân bãi</Link></li>
          <li><Link to="/user/booking">Đặt lịch</Link></li>
          <li><Link to="/user/bookings">Chính sách</Link></li>
          <li><Link to="/user/review">Đánh giá</Link></li>
          <li><Link to="/user/payment">Thanh toán đơn đặt sân</Link></li>
          <li><Link to="/user/support">Liên hệ</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/user/login" className="navbar-link">Đăng ký</Link>
          <Link to="/user/register" className="navbar-link">Đăng nhập</Link>
          <Link to="/user/profile" className="navbar-link">Tìm kiếm</Link>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}