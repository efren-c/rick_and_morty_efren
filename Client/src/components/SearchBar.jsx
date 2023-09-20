import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type="search" onChange={handleChange} value={id} />
         <button onClick={() => { onSearch(id); setId("") }} > Agregar </button>
         <button onClick={() => { onSearch(Math.floor(Math.random() * 826 + 1)) }}>Random</button>
      </div >
   )
}

{/* <button onClick={(id) => { onSearch(id) }} > Agregar </button> */ }