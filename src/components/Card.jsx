import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

function Card({ name, type, image, websiteUrl, details }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const handleContact = () => {
    if (details.contact.includes('@')) {
      window.open(`mailto:${details.contact}`, '_self')
    } else {
      window.open(`tel:${details.contact}`, '_self')
    }
  }

  const handleDirections = () => {
    const address = encodeURIComponent(details.location)
    window.open(`https://www.google.com/maps/search/${address}`, '_blank')
  }

  const handleAddToCalendar = () => {
    const eventTitle = encodeURIComponent(name)
    const eventDetails = encodeURIComponent(`${details.description}\n\nInstructor: ${details.instructor}\nLocation: ${details.location}`)
    const startDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=${startDate}/${startDate}`
    window.open(googleCalendarUrl, '_blank')
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <>
      <div className="card">
        <img src={image} alt={`${name} ${type}`} className="resource-image" />
        <div className="resource-info">
          <h2>{name}</h2>
          <p className="resource-type">{type}</p>
          <p className="resource-price">{details.price}</p>
          
          <div className="card-actions">
            <button 
              className="view-details-btn primary-btn"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </button>
            
            <div className="secondary-actions">
              <button 
                className="action-btn contact-btn"
                onClick={handleContact}
                title={details.contact.includes('@') ? "Send Email" : "Call"}
              >
                {details.contact.includes('@') ? '📧' : '📞'} Contact
              </button>
              
              <button 
                className="action-btn calendar-btn"
                onClick={handleAddToCalendar}
                title="Add to Calendar"
              >
                📅 Calendar
              </button>
              
              <button 
                className={`action-btn favorite-btn ${isFavorited ? 'favorited' : ''}`}
                onClick={toggleFavorite}
                title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
              >
                {isFavorited ? '❤️' : '🤍'} {isFavorited ? 'Saved' : 'Save'}
              </button>
            </div>
            
            {details.location && details.location !== 'Online Platform' && (
              <button 
                className="action-btn directions-btn"
                onClick={handleDirections}
                title="Get Directions"
              >
                📍 Directions
              </button>
            )}
            
            {websiteUrl && websiteUrl !== '#' && (
              <a 
                href={websiteUrl}
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resource={{
          name,
          type,
          image,
          description: details.description,
          schedule: details.schedule,
          time: details.time,
          location: details.location,
          instructor: details.instructor,
          price: details.price,
          topics: details.topics,
          contact: details.contact
        }}
      />
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  details: PropTypes.shape({
    description: PropTypes.string.isRequired,
    schedule: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card 