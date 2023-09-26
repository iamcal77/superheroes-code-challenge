

import React, { useState, useEffect } from 'react';

function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("/heroes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(setHeroes)
      .catch((error) => {
        console.error("Error fetching heroes:", error);
      });
  }, []);

  return (
    <div>
      <h1>Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <h2>{hero.name}</h2>
            <p>Super Name: {hero.super_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;



