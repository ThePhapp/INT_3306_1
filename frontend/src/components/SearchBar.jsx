import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const [fieldType, setFieldType] = useState('')
  const [price, setPrice] = useState('')

  const handleSearch = () => {
    console.log({ location, fieldType, price })
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm theo tỉnh thành"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="search-input"
      />
      <select
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value)}
        className="search-select"
      >
        <option value="">Nhập loại sân bóng đá mà bạn tìm</option>
        <option value="5v5">Sân 5 người</option>
        <option value="7v7">Sân 7 người</option>
        <option value="11v11">Sân 11 người</option>
      </select>
      <input
        type="text"
        placeholder="Mức giá tạm"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍 Tìm kiếm
      </button>
    </div>
  )
}