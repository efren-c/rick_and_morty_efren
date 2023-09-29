import './App.css';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites'
import Error from './components/Error/Error'
import Detail from './components/Detail/Detail';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const URL = 'http://localhost:3001/rickandmorty/login/'

   const login = async (userData) => {
      try {
         const { email, password } = await userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data
         setAccess(access)
         access && navigate('/home')
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (characters.find((char) => char.id === +id)) {
            return alert("Personaje repetido")
         }

         if (data.name) { //data.id
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== +id)
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
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/error' element={<Error />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;