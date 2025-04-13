// src/App.jsx
import { useEffect, useState } from 'react'
import ContributorCard from './ContributorCard';
import './App.css'

function App() {
  const [dogs, setDogs] = useState([])

useEffect(() => {
  fetch('/contributors.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('Fetched contributors:', data)
      setDogs(data)
    })
    .catch((err) => {
      console.error('Failed to load contributors.json:', err)
    })
}, [])

  return (
    <div className="container">
      <h1>🐾 Welcome to the Puppy Palace 🐾</h1>
      <p>
        Add your pup and join the gallery!{' '}
        <a
            href="https://github.com/michelle-burton/puppy-palace-react-app/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: '#007acc' }}
        >
            Contribute on GitHub →
        </a>
        </p>
        <div className="gallery">
            {dogs.map((dog, index) => (
                <ContributorCard key={index} dog={dog} />
            ))}
        </div>
    </div>
  )
}

export default App
