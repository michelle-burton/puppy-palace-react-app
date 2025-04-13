// src/App.jsx
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('/contributors.json')
      .then((res) => res.json())
      .then(setDogs)
  }, [])

  return (
    <div className="container">
      <h1>🐾 Welcome to the Puppy Palace 🐾</h1>
      <p>Add your pup and join the gallery!</p>
      <div className="gallery">
        {dogs.map((dog, index) => (
          <div className="card" key={index}>
            <img src={dog.image} alt={dog.caption} />
            <h3>{dog.name}</h3>
            <p>{dog.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
