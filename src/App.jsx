import React from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

const learningResources = [
  {
    id: 1,
    name: 'React Bootcamp 2024',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    websiteUrl: 'https://reactbootcamp2024.com',
    details: {
      description: 'Intensive 3-day React bootcamp covering hooks, state management, and modern development practices.',
      schedule: 'March 15-17, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Hub Downtown, 123 Innovation Way',
      instructor: 'Sarah Chen - Senior React Developer at Meta',
      price: '$299',
      topics: [
        {
          name: 'React Fundamentals',
          description: 'Components, JSX, props, and state management'
        },
        {
          name: 'React Hooks',
          description: 'useState, useEffect, useContext, and custom hooks'
        },
        {
          name: 'State Management',
          description: 'Redux, Context API, and Zustand implementation'
        }
      ],
      contact: '(555) 123-4567'
    }
  },
  {
    id: 2,
    name: 'AI/ML Study Group',
    type: 'Study Group',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    websiteUrl: 'https://aimlstudygroup.dev',
    details: {
      description: 'Weekly study sessions focused on machine learning algorithms and AI implementation using Python.',
      schedule: 'Every Wednesday',
      time: '7:00 PM - 9:00 PM',
      location: 'Central Library - Room 205, 456 Knowledge Ave',
      instructor: 'Dr. Michael Rodriguez - Data Science Professor',
      price: 'Free',
      topics: [
        {
          name: 'Machine Learning Basics',
          description: 'Supervised and unsupervised learning fundamentals'
        },
        {
          name: 'Deep Learning',
          description: 'Neural networks, TensorFlow, and PyTorch'
        },
        {
          name: 'AI Ethics',
          description: 'Responsible AI development and bias prevention'
        }
      ],
      contact: '(555) 234-5678'
    }
  },
  {
    id: 3,
    name: 'JavaScript Mastery Course',
    type: 'Online Course',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    websiteUrl: 'https://jsmastery.dev',
    details: {
      description: 'Comprehensive JavaScript course from beginner to advanced level with hands-on projects.',
      schedule: 'Self-paced',
      time: '40 hours of content',
      location: 'Online Platform',
      instructor: 'JavaScript Mastery Team',
      price: '$149',
      topics: [
        {
          name: 'ES6+ Features',
          description: 'Arrow functions, destructuring, modules, and async/await'
        },
        {
          name: 'DOM Manipulation',
          description: 'Interactive web development and event handling'
        },
        {
          name: 'APIs & Fetch',
          description: 'Working with REST APIs and handling HTTP requests'
        }
      ],
      contact: 'support@jsmastery.dev'
    }
  },
  {
    id: 4,
    name: 'DevOps Conference 2024',
    type: 'Conference',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80',
    websiteUrl: 'https://devopsconf2024.tech',
    details: {
      description: 'Annual DevOps conference featuring industry leaders discussing CI/CD, containerization, and cloud technologies.',
      schedule: 'June 20-22, 2024',
      time: '8:00 AM - 6:00 PM',
      location: 'Convention Center, 789 Tech Boulevard',
      instructor: 'Multiple Industry Experts',
      price: '$599 (Early Bird: $449)',
      topics: [
        {
          name: 'Kubernetes & Docker',
          description: 'Container orchestration and microservices architecture'
        },
        {
          name: 'CI/CD Pipelines',
          description: 'Automated testing, deployment, and monitoring'
        },
        {
          name: 'Cloud Infrastructure',
          description: 'AWS, Azure, and Google Cloud Platform best practices'
        }
      ],
      contact: '(555) 345-6789'
    }
  },
  {
    id: 5,
    name: 'Python for Data Science',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80',
    websiteUrl: 'https://pythondatascience.learn',
    details: {
      description: 'Hands-on workshop covering Python libraries for data analysis, visualization, and machine learning.',
      schedule: 'April 10, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Data Science Institute, 321 Analytics Street',
      instructor: 'Dr. Emily Watson - Senior Data Scientist',
      price: '$199',
      topics: [
        {
          name: 'Pandas & NumPy',
          description: 'Data manipulation and numerical computing'
        },
        {
          name: 'Matplotlib & Seaborn',
          description: 'Data visualization and statistical plotting'
        },
        {
          name: 'Scikit-learn',
          description: 'Machine learning model implementation'
        }
      ],
      contact: '(555) 456-7890'
    }
  },
  {
    id: 6,
    name: 'Web Development Bootcamp',
    type: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    websiteUrl: 'https://webdevbootcamp.academy',
    details: {
      description: 'Intensive 12-week full-stack web development bootcamp covering HTML, CSS, JavaScript, React, and Node.js.',
      schedule: 'February 5 - April 26, 2024',
      time: 'Monday-Friday, 9:00 AM - 3:00 PM',
      location: 'Code Academy Campus, 555 Developer Drive',
      instructor: 'Full-Stack Development Team',
      price: '$12,999 (Payment plans available)',
      topics: [
        {
          name: 'Frontend Development',
          description: 'HTML5, CSS3, JavaScript, React, and responsive design'
        },
        {
          name: 'Backend Development',
          description: 'Node.js, Express, databases, and API development'
        },
        {
          name: 'Full-Stack Projects',
          description: 'Portfolio projects and team collaboration'
        }
      ],
      contact: '(555) 567-8901'
    }
  },
  {
    id: 7,
    name: 'Cybersecurity Essentials',
    type: 'Course',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    websiteUrl: 'https://cybersecurity-essentials.edu',
    details: {
      description: 'Essential cybersecurity concepts for developers including secure coding practices and threat prevention.',
      schedule: 'May 8-10, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Security Training Center, 888 Safe Street',
      instructor: 'John Martinez - Cybersecurity Specialist',
      price: '$399',
      topics: [
        {
          name: 'Secure Coding',
          description: 'Prevention of common vulnerabilities and attacks'
        },
        {
          name: 'Network Security',
          description: 'Firewalls, encryption, and secure protocols'
        },
        {
          name: 'Penetration Testing',
          description: 'Ethical hacking and vulnerability assessment'
        }
      ],
      contact: '(555) 678-9012'
    }
  },
  {
    id: 8,
    name: 'Mobile App Development',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    websiteUrl: 'https://mobiledev-workshop.com',
    details: {
      description: 'Cross-platform mobile development using React Native and Flutter frameworks.',
      schedule: 'March 28-29, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Mobile Innovation Lab, 111 App Avenue',
      instructor: 'Lisa Kim - Senior Mobile Developer',
      price: '$449',
      topics: [
        {
          name: 'React Native',
          description: 'iOS and Android development with React Native'
        },
        {
          name: 'Flutter Basics',
          description: 'Google\'s UI toolkit for mobile development'
        },
        {
          name: 'App Store Deployment',
          description: 'Publishing apps to Google Play and App Store'
        }
      ],
      contact: '(555) 789-0123'
    }
  },
  {
    id: 9,
    name: 'Database Design Masterclass',
    type: 'Masterclass',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80',
    websiteUrl: 'https://database-masterclass.db',
    details: {
      description: 'Advanced database design principles covering SQL, NoSQL, and database optimization techniques.',
      schedule: 'April 25, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Database Institute, 777 Query Road',
      instructor: 'David Thompson - Database Architect',
      price: '$299',
      topics: [
        {
          name: 'SQL Optimization',
          description: 'Query performance tuning and indexing strategies'
        },
        {
          name: 'NoSQL Databases',
          description: 'MongoDB, Redis, and document-based storage'
        },
        {
          name: 'Database Security',
          description: 'Data protection and access control'
        }
      ],
      contact: '(555) 890-1234'
    }
  },
  {
    id: 10,
    name: 'Open Source Contribution',
    type: 'Meetup',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80',
    websiteUrl: 'https://opensource-meetup.org',
    details: {
      description: 'Monthly meetup for developers interested in contributing to open source projects and building their GitHub profile.',
      schedule: 'First Friday of every month',
      time: '6:30 PM - 8:30 PM',
      location: 'Community Center, 999 Collaboration Circle',
      instructor: 'Open Source Community Leaders',
      price: 'Free',
      topics: [
        {
          name: 'Git & GitHub',
          description: 'Version control and collaborative development'
        },
        {
          name: 'Finding Projects',
          description: 'How to discover and evaluate open source projects'
        },
        {
          name: 'Making Contributions',
          description: 'Pull requests, code reviews, and community guidelines'
        }
      ],
      contact: 'hello@opensource-meetup.org'
    }
  }
]

function App() {
  return (
    <div className="container">
      <Header />
      <main className="card-grid">
        {learningResources.map((resource) => (
          <Card
            key={resource.id}
            name={resource.name}
            type={resource.type}
            image={resource.image}
            websiteUrl={resource.websiteUrl}
            details={resource.details}
          />
        ))}
      </main>
    </div>
  )
}

export default App
