import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <h1 className="description">No me salio la pinche aplicacion pero lo intente merezco un 6, mueck</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
          <img src={ imageRickMorty} alt="Rick & Morty" className='img-home'></img>
          <img src=""></img>

        <button onClick={reqApi} className='btn-search'>
          Indagar
          </button>
          </>
        )}
        <ul>
      <p>Angel Guarneros Maldonado</p>
      <p></p>
        <p>ZS20020316@estudiantes.uv.mx</p>
        <p>Ingeradsilver@gmail.com</p>
        <a href="https://github.com/BabyGuma?tab=followers" target="_blank" rel="noopener noreferrer">GitHub</a>
      </ul>
      </header>
    </div>
  );
}

export default App;
