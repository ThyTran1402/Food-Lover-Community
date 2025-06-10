import React from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

const foodTrucks = [
  {
    id: 1,
    name: 'Pho-nomenal',
    cuisine: 'Vietnamese',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 2,
    name: 'Seoul Food',
    cuisine: 'Korean',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 3,
    name: 'Dim Sum Express',
    cuisine: 'Chinese',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 4,
    name: 'Sushi Revolution',
    cuisine: 'Japanese',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 5,
    name: 'Thai Street Eats',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 6,
    name: 'BBQ Boss',
    cuisine: 'American BBQ',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 7,
    name: 'Taco Tornado',
    cuisine: 'Mexican-American',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 8,
    name: 'Burger Bliss',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 9,
    name: 'Lobster Roll Express',
    cuisine: 'American Seafood',
    image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844?auto=format&fit=crop&q=80',
    menuUrl: '#'
  },
  {
    id: 10,
    name: 'Banh Mi Brothers',
    cuisine: 'Vietnamese',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80',
    menuUrl: '#'
  }
]

function App() {
  return (
    <div className="container">
      <Header />
      <main className="card-grid">
        {foodTrucks.map((truck) => (
          <Card
            key={truck.id}
            name={truck.name}
            cuisine={truck.cuisine}
            image={truck.image}
            menuUrl={truck.menuUrl}
          />
        ))}
      </main>
    </div>
  )
}

export default App
