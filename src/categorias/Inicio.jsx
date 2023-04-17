
// CORREGIR (ERROR'S FIX)
// I'M TESTING THIS PROEJECT...







import '../style/inicio.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

function Inicio() {
  

    useEffect(()=>{
        fetch('https://serverbackend-br77.onrender.com/posts')
            .then((res)=>{res.json()})
            .then((respuesta) => console.log(respuesta))
    }, [])


    

    return (
        
        <main >
            
            <h1>xd</h1>
        </main>
    )
}

export default Inicio

