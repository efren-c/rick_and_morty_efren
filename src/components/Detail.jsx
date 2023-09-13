import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

/* const URL_BASE = "https://rym2-production.up.railway.app/api/characters/$%7Bid%7D"
const API_KEY = "" */

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({}) //1er par del arr state, 2do es fn que permite mod el estado. {} dentro de () asigna directamente al estado por default. Por lo tanto estado inicial char es un obj vacío. Es un {} porque la respuesta del API es un obj. El tipo de dato con el que se inicializa el estado se debe mantener en su uso.

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            //.then(response => response.data)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]); //arr de dependencia, ciclo update

    return (
        <div>
            <h2>Name: {character?.name}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Name: {character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
            {/* character ? <h2>{character.name}</h2> : null
                character && <div>
                    <h2>character.name</h2>
                    <h2>character.status</h2>
                </div> */ }
        </div>
    )
}

export default Detail