import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

function Modal({ isOpen, onClose, restaurant }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={restaurant.image} alt={restaurant.name} className="modal-image" />
        <h2>{restaurant.name}</h2>
        <p className="cuisine-tag">{restaurant.cuisine}</p>
        <div className="restaurant-details">
          <h3>Popular Menu Items</h3>
          <ul className="menu-items">
            {restaurant.menuItems.map((item, index) => (
              <li key={index}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
                <p className="item-description">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="restaurant-info">
            <p><strong>Hours:</strong> {restaurant.hours}</p>
            <p><strong>Location:</strong> {restaurant.location}</p>
            <p><strong>Phone:</strong> {restaurant.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    hours: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default Modal 