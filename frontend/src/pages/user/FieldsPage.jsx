import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import './FieldsPage.css'

export default function FieldsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Bóng đá', count: 50 },
    { id: 'tennis', name: 'Tennis', count: 10 },
    { id: 'pickleball', name: 'Pickleball', count: 8 },
    { id: 'badminton', name: 'Cầu lông', count: 12 },
    { id: 'basketball', name: 'Bóng rổ', count: 15 },
    { id: 'volleyball', name: 'Bóng chuyền', count: 20 }
  ]

  const fields = [
    {
      id: 1,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    },
    {
      id: 2,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    },
    {
      id: 3,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    },
    {
      id: 4,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    },
    {
      id: 5,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    },
    {
      id: 6,
      name: 'Sân bóng Anh Duy',
      image: '/field-placeholder.jpg',
      location: '📍 Huyện Cần Giờ, TP Hồ Chí Minh',
      price: '💰 150.000đ - 250.000đ'
    }
  ]

  return (
    <div className="fields-page">
      <Navbar />
      
      <div className="fields-container">
        <aside className="fields-sidebar">
          <h2>Danh sách sân bãi</h2>
          <ul className="category-list">
            {categories.map(category => (
              <li 
                key={category.id}
                className={selectedCategory === category.id ? 'active' : ''}
                onClick={() => setSelectedCategory(category.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') setSelectedCategory(category.id)
                }}
              >
                <span>{category.name}</span>
                <span className="category-count">{category.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="fields-main">
          <h1>Danh sách sân bóng</h1>
          
          <div className="fields-grid">
            {fields.map(field => (
              <div key={field.id} className="field-card">
                <div className="field-image">
                  <img src={field.image} alt={field.name} />
                </div>
                <div className="field-info">
                  <h3>{field.name}</h3>
                  <p className="field-location">{field.location}</p>
                  <p className="field-price">{field.price}</p>
                  <button className="field-book-btn">Chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}