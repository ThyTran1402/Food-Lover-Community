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
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Classic Pho',
          price: 12.99,
          description: 'Traditional Vietnamese noodle soup with beef broth, rice noodles, and your choice of meat'
        },
        {
          name: 'Banh Mi',
          price: 8.99,
          description: 'Vietnamese sandwich with pickled vegetables, cilantro, and choice of protein'
        },
        {
          name: 'Spring Rolls',
          price: 6.99,
          description: 'Fresh rice paper rolls with shrimp, pork, vegetables, and peanut dipping sauce'
        }
      ],
      hours: 'Mon-Sun: 11:00 AM - 9:00 PM',
      location: '123 Food Truck Lane, Foodie City',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 2,
    name: 'Seoul Food',
    cuisine: 'Korean',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Bulgogi Bowl',
          price: 13.99,
          description: 'Marinated beef with rice, vegetables, and signature sauce'
        },
        {
          name: 'Kimchi Fried Rice',
          price: 11.99,
          description: 'Spicy fried rice with kimchi, vegetables, and egg'
        },
        {
          name: 'Korean Fried Chicken',
          price: 12.99,
          description: 'Crispy chicken with choice of soy garlic or spicy sauce'
        }
      ],
      hours: 'Tue-Sun: 11:30 AM - 8:30 PM',
      location: '456 Street Food Ave, Foodie City',
      phone: '(555) 234-5678'
    }
  },
  {
    id: 3,
    name: 'Dim Sum Express',
    cuisine: 'Chinese',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Har Gow',
          price: 6.99,
          description: 'Shrimp dumplings with bamboo shoots (4 pieces)'
        },
        {
          name: 'Siu Mai',
          price: 5.99,
          description: 'Pork and shrimp dumplings (4 pieces)'
        },
        {
          name: 'BBQ Pork Buns',
          price: 5.99,
          description: 'Steamed buns filled with char siu pork (3 pieces)'
        }
      ],
      hours: 'Wed-Mon: 10:00 AM - 8:00 PM',
      location: '789 Dim Sum Road, Foodie City',
      phone: '(555) 345-6789'
    }
  },
  {
    id: 4,
    name: 'Sushi Revolution',
    cuisine: 'Japanese',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Dragon Roll',
          price: 15.99,
          description: 'Eel and cucumber topped with avocado and eel sauce'
        },
        {
          name: 'Spicy Tuna Roll',
          price: 12.99,
          description: 'Fresh tuna with spicy mayo and cucumber'
        },
        {
          name: 'Salmon Nigiri',
          price: 8.99,
          description: 'Fresh salmon over seasoned rice (2 pieces)'
        }
      ],
      hours: 'Mon-Sat: 11:30 AM - 9:30 PM',
      location: '321 Sushi Street, Foodie City',
      phone: '(555) 456-7890'
    }
  },
  {
    id: 5,
    name: 'Thai Street Eats',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Pad Thai',
          price: 11.99,
          description: 'Rice noodles with tofu, shrimp, peanuts, and tamarind sauce'
        },
        {
          name: 'Green Curry',
          price: 12.99,
          description: 'Coconut curry with bamboo shoots, vegetables, and choice of protein'
        },
        {
          name: 'Mango Sticky Rice',
          price: 6.99,
          description: 'Sweet sticky rice with fresh mango and coconut cream'
        }
      ],
      hours: 'Tue-Sun: 11:00 AM - 9:00 PM',
      location: '654 Thai Lane, Foodie City',
      phone: '(555) 567-8901'
    }
  },
  {
    id: 6,
    name: 'BBQ Boss',
    cuisine: 'American BBQ',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Brisket Plate',
          price: 18.99,
          description: 'Smoked brisket with two sides and cornbread'
        },
        {
          name: 'Pulled Pork Sandwich',
          price: 12.99,
          description: 'House-smoked pulled pork with coleslaw on brioche'
        },
        {
          name: 'Rack of Ribs',
          price: 24.99,
          description: 'Full rack of baby back ribs with BBQ sauce'
        }
      ],
      hours: 'Wed-Sun: 11:00 AM - 8:00 PM',
      location: '987 Smoke Ring Road, Foodie City',
      phone: '(555) 678-9012'
    }
  },
  {
    id: 7,
    name: 'Taco Tornado',
    cuisine: 'Mexican-American',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Street Tacos',
          price: 9.99,
          description: 'Three corn tortilla tacos with choice of meat, onions, and cilantro'
        },
        {
          name: 'Burrito Supreme',
          price: 11.99,
          description: 'Large burrito with rice, beans, meat, and all the fixings'
        },
        {
          name: 'Quesadilla',
          price: 10.99,
          description: 'Large flour tortilla with cheese, meat, and vegetables'
        }
      ],
      hours: 'Mon-Sun: 10:30 AM - 10:00 PM',
      location: '741 Taco Trail, Foodie City',
      phone: '(555) 789-0123'
    }
  },
  {
    id: 8,
    name: 'Burger Bliss',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Classic Burger',
          price: 10.99,
          description: 'Beef patty with lettuce, tomato, onion, and special sauce'
        },
        {
          name: 'Bacon Cheese Burger',
          price: 12.99,
          description: 'Classic burger with bacon and cheddar cheese'
        },
        {
          name: 'Veggie Burger',
          price: 11.99,
          description: 'House-made vegetable patty with avocado and sprouts'
        }
      ],
      hours: 'Mon-Sun: 11:00 AM - 9:00 PM',
      location: '852 Burger Boulevard, Foodie City',
      phone: '(555) 890-1234'
    }
  },
  {
    id: 9,
    name: 'Lobster Roll Express',
    cuisine: 'American Seafood',
    image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Classic Lobster Roll',
          price: 21.99,
          description: 'Maine lobster with light mayo on a toasted roll'
        },
        {
          name: 'Crab Cake Sandwich',
          price: 16.99,
          description: 'Maryland-style crab cake with remoulade sauce'
        },
        {
          name: 'Seafood Chowder',
          price: 8.99,
          description: 'Creamy New England style with lobster, clams, and fish'
        }
      ],
      hours: 'Thu-Tue: 11:30 AM - 8:00 PM',
      location: '963 Seafood Square, Foodie City',
      phone: '(555) 901-2345'
    }
  },
  {
    id: 10,
    name: 'Banh Mi Brothers',
    cuisine: 'Vietnamese',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80',
    menuUrl: '#',
    details: {
      menuItems: [
        {
          name: 'Classic Banh Mi',
          price: 8.99,
          description: 'Traditional Vietnamese sandwich with pate, cold cuts, and pickled vegetables'
        },
        {
          name: 'Grilled Pork Banh Mi',
          price: 9.99,
          description: 'Marinated grilled pork with traditional toppings'
        },
        {
          name: 'Lemongrass Tofu Banh Mi',
          price: 8.99,
          description: 'Vegetarian option with lemongrass-marinated tofu'
        }
      ],
      hours: 'Mon-Sat: 10:30 AM - 7:30 PM',
      location: '159 Banh Mi Way, Foodie City',
      phone: '(555) 012-3456'
    }
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
            details={truck.details}
          />
        ))}
      </main>
    </div>
  )
}

export default App
