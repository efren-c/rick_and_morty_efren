import { useState } from "react";

export default function SearchBar({ onSearch, onSearchRandom }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type="search" onChange={handleChange} value={id} />
         <button onClick={() => { onSearch(id); setId("") }} > Agregar </button>
         <button onClick={() => { onSearchRandom() }}>Random</button>
      </div >
   )
}

{/* <button onClick={(id) => { onSearch(id) }} > Agregar </button> */ }