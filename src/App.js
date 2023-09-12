import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import About from './components/About';
import Favorites from './components/Favorites'
import Error from './components/Error'
import Detail from './components/Detail';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

const URL_BASE = "https://rym2-production.up.railway.app/api/characters/$%7Bid%7D"
const API_KEY = ""

function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const EMAIL = "efren@soyhenry.com"
   const PASSWORD = "efren42Hen"

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearchRandom = () => {
      const randomId = Math.floor(Math.random() * 826);
      axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
         .then(response => response.data)
         .then((data) => {
            if (data.id) {
               setCharacters(oldChars => [...oldChars, data]);
            } else {
               navigate('/:error');
            }
         })
         .catch(error => {
            console.log(error);
            navigate('/:error');
         });
   };

   const onSearch = (id) => {
      if (characters.find((char) => char.id === id)) {
         return alert("Personaje repetido")
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`)  //axios(`${URL_BASE}/{id}?key=${API_KEY}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) { //data.id
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
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess} >
               <SearchBar />
            </Nav>
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail:id' element={<Detail />} />
            <Route path='/error' element={<Error />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;