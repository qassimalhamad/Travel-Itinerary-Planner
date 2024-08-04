
import './App.css'

function App() {
  const places = [
    { name: 'Spain', visited: true },
    { name: 'Italy', visited: true },
    { name: 'Turkey', visited: false },
  ];


  const placesList = places.map((place, index) => (
    <li key={index} className={place.visited ? 'visited' : 'not-visited'}>
      {place.name}
    </li>
  ))
      
    return (
      <>
        <h1>Places List</h1>
  
        {placesList}
      </>
    );
  }

export default App