import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

function Modal({ isOpen, onClose, resource }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={resource.image} alt={resource.name} className="modal-image" />
        <h2>{resource.name}</h2>
        <p className="type-tag">{resource.type}</p>
        <p className="price-tag">{resource.price}</p>
        
        <div className="resource-details">
          <div className="description-section">
            <h3>About This {resource.type}</h3>
            <p className="description">{resource.description}</p>
          </div>
          
          <div className="schedule-section">
            <h3>Schedule & Details</h3>
            <div className="schedule-grid">
              <div className="schedule-item">
                <strong>📅 Schedule:</strong> {resource.schedule}
              </div>
              <div className="schedule-item">
                <strong>⏰ Time:</strong> {resource.time}
              </div>
              <div className="schedule-item">
                <strong>📍 Location:</strong> {resource.location}
              </div>
              <div className="schedule-item">
                <strong>👨‍🏫 Instructor:</strong> {resource.instructor}
              </div>
            </div>
          </div>
          
          <div className="topics-section">
            <h3>What You'll Learn</h3>
            <ul className="topic-items">
              {resource.topics.map((topic, index) => (
                <li key={index}>
                  <span className="topic-name">{topic.name}</span>
                  <p className="topic-description">{topic.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="contact-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p><strong>Contact:</strong> {resource.contact}</p>
              <p><strong>Price:</strong> {resource.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  resource: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
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

export default Modal 