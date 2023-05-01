import '../style/inicio.css'
import {Link} from 'react-router-dom'
import { usePost } from '../context/Postcontext'

function Inicio() {
  

    const { posts } =  usePost()


    

    return (
        
        <main >
            
            <div className='titulo-tema'>
                <b><h1>ESQUEMAS DE BASE DE DATOS</h1></b>
            </div>
                <div className='contenido'>
                    {posts.map((publicacion)=>{
                        return <div className='carta' key={publicacion._id}>
                                    <figure>
                                        {publicacion.imagen && <img src={publicacion.imagen.url} className="imagen" alt="imagenes referenciales*" />}
                                    </figure>
                                    <div>    
                                        <div>
                                            <h1><b>{(publicacion.nombre).toUpperCase()}</b></h1>
                                        </div>
                                        <Link to={`/items/${publicacion._id}`}>
                                            <button className='boton-imagen'>Vista Previa</button>
                                        </Link>
                                    </div>
                                </div>     
                    })}
            
                </div>
        </main>
    )
}

export default Inicio
