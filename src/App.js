import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

const URL_BASE = "https://rym2-production.up.railway.app/api/characters/$%7Bid%7D"
const API_KEY = ""

function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)  //axios(`${URL_BASE}/{id}?key=${API_KEY}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}>
            <SearchBar />
         </Nav>

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/details:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;