import React from 'react'
import './FeatureCards.css'

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      icon: '🔍',
      title: 'Tìm kiếm vị trí sân',
      description: 'Dễ dàng tìm kiếm sân bãi theo vùng miền toàn quốc gần nhất với người dùng'
    },
    {
      id: 2,
      icon: '📅',
      title: 'Đặt lịch online',
      description: 'Không cần phải trực tiếp đặt lịch không cần điện thoại liên lạc sân đặt đơn giản'
    },
    {
      id: 3,
      icon: '🏃',
      title: 'Tìm đội, bắt cặp đấu',
      description: 'Tìm kiếm, ghép bạn đến sân của chúng tôi, bắt cặp, đấu tay đôi đang chờ tới nha bạn ơi'
    }
  ]

  return (
    <div className="feature-cards-container">
      <div className="feature-cards">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}