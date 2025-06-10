import React from 'react'
import PropTypes from 'prop-types'

function Card({ name, cuisine, image, menuUrl }) {
  return (
    <div className="card">
      <img src={image} alt={`${name} food truck`} className="food-truck-image" />
      <div className="food-truck-info">
        <h2>{name}</h2>
        <p className="cuisine">{cuisine}</p>
        <a href={menuUrl} className="view-menu-btn">
          View Menu
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  menuUrl: PropTypes.string.isRequired
}

export default Card 