
import React from 'react';
import CharacterCard from './components/CharacterCard'; 
import './index.css'; 


const mockCharacters = [
  { name: "Luke Skywalker", height: "172", mass: "77", gender: "male", birthYear: "19BBY" },
  { name: "C-3PO", height: "167", mass: "75", gender: "n/a", birthYear: "112BBY" },
  { name: "R2-D2", height: "96", mass: "32", gender: "n/a", birthYear: "33BBY" },
  { name: "Darth Vader", height: "202", mass: "136", gender: "male", birthYear: "41.9BBY" },
  { name: "Leia Organa", height: "150", mass: "49", gender: "female", birthYear: "19BBY" },
  { name: "Obi-Wan Kenobi", height: "182", mass: "77", gender: "male", birthYear: "57BBY" }
];

const App = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="swapi-title">24.1</h1>
       
      </header>
      
      <main className="row">
        {}
        {mockCharacters.map((char, index) => (
          <CharacterCard 
            key={index} 
            name={char.name}
            height={char.height}
            mass={char.mass}
            gender={char.gender}
            birthYear={char.birthYear}
          />
        ))}
      </main>
    </div>
  );
};

export default App;