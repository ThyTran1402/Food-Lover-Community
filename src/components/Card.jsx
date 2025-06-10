import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

function Card({ name, cuisine, image, menuUrl, details }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="card">
        <img src={image} alt={`${name} food truck`} className="food-truck-image" />
        <div className="food-truck-info">
          <h2>{name}</h2>
          <p className="cuisine">{cuisine}</p>
          <button 
            className="view-menu-btn"
            onClick={() => setIsModalOpen(true)}
          >
            View Menu
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        restaurant={{
          name,
          cuisine,
          image,
          menuItems: details.menuItems,
          hours: details.hours,
          location: details.location,
          phone: details.phone
        }}
      />
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  menuUrl: PropTypes.string.isRequired,
  details: PropTypes.shape({
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

export default Card 