import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import './BookingPage.css'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fieldId: '',
    date: '',
    startTime: '',
    endTime: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking data:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="booking-page">
      <Navbar />
      
      <div className="booking-container">
        <h1>Đặt lịch sân bóng</h1>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="fieldId">Chọn sân</label>
            <select 
              id="fieldId"
              name="fieldId" 
              value={formData.fieldId}
              onChange={handleChange}
              required
            >
              <option value="">-- Chọn sân --</option>
              <option value="1">Sân bóng Anh Duy - Sân 5 người</option>
              <option value="2">Sân bóng Anh Duy - Sân 7 người</option>
              <option value="3">Sân bóng Anh Duy - Sân 11 người</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Ngày đặt</label>
              <input 
                id="date"
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="startTime">Giờ bắt đầu</label>
              <input 
                id="startTime"
                type="time" 
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endTime">Giờ kết thúc</label>
              <input 
                id="endTime"
                type="time" 
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input 
              id="name"
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input 
                id="phone"
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Đặt lịch ngay
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}