import React from 'react';
import { useState, useEffect } from 'react';


const IMAGENES = [
    "https://rickandmortyapi.com/api/character/avatar/143.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/243.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
];

const urlApi = 'https://rickandmortyapi.com/api/character';

export default function Imagenes(){  
    const [imgs, setImgs] = useState(IMAGENES)

    useEffect( ()=> {
        console.log("useEffect")
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
            })
    }, [])

    return (
    <div>
        {imgs.map( imagenIndividual => <img src={imagenIndividual} />)}
    </div>
    )
}


