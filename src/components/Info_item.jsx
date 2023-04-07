import React,{ useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { usePost } from "../context/Postcontext";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";
import "../style/info_items.css";
import { saveAs } from "file-saver"; 'file-saver'

function Info_item() {
  const { id } = useParams();
  const { obtenerPost, eliminarPost, obtenerUsuario } = usePost();
  const navigate = useNavigate()
  const [post, setPost] = useState([]);
  const [userLogedid, setUser] = useState("");
  //const [userinfo, setUserinfo] = useState("");
  const [userEncontrado, setUserEncontrado] = useState({})

  useEffect(() => {
    (async () => {
      setPost(await obtenerPost(id));

      //setUserinfo(await postInfo(id)); // DEVUELVE LA ID DE USUARIO QUE CREO LA PUBLICACION
      
      const usuario = JSON.parse(window.localStorage.getItem("UsuarioLogeado"));
      if (usuario) {
        setUser(usuario.id); // DEVUELVE KA UD DEL USAUARIO QUE HA INICIADO SESION
      }
      setUserEncontrado(await obtenerUsuario(usuario.id))
    })(); // RESOLVER PROMESA CON CLOSURE
  }, []);

  const userLogeadoID = userLogedid;// ID DEL QUIEN HA LOGEADO SESION Y SE ALMACENO EN LOCALSTORAGE
  const userId = post.creadoPor?._id   // ID DEL QUIEN CREO EL POST
  // ESTO SE USARA PARA COMPARAR ID'S

  
  


  const rolDeusuario = userEncontrado.data?.roles
  const idRolUsuario = rolDeusuario?.map(e => e._id)
  
  const rolAdmin = "641246755e33c6db52fd5de7"
 

  const abrir_info = () => {
    modal.style.display = "flex";
  };

  return (
    <div className="contenedor-info" key={post._id}>
      <div className="contenedor-imagen">
        {post.imagen && (
          <img src={post.imagen.url} alt="imagenes referenciales*" />
        )}
      </div>
      <div className="contenedor-nombreEsquema">
        <div className="contenedor-nombre">
          <div className="contenedor-titulo">
            <h1>
              <b>{post.nombre}</b>
            </h1>
            <div className="contenedor-opciones">
              
              {userLogeadoID == userId || idRolUsuario == rolAdmin ? (
                <div className="mini-contenedor-tacho">
                  <button
                    onClick={() => {
                      eliminarPost(post._id);
                      toast.success("publicacion eliminada!", {
                        duration: 10000,
                      });
                      navigate("/");
                    }}
                  >
                    <BiTrash className="tacho" />
                  </button>
                </div>
              ) : null}
              
            </div>
          </div>
          <hr />
          <br />
          <p>{post.info}</p>
          <br />
          <hr />
          <b>
            <i>Creador por: </i>
          </b>
          <br />
          <div className="contenedor-usuario">
            <div className="contenedor-imagen-usuario">
              <VscAccount className="icono-usuario" />
            </div>
            <div className="contenedor-usuario-nombre">
              {post.creadoPor ? (
                <i>{post.creadoPor.nombre}</i>
              ) : (
                <h1>Anonimo</h1>
              )}
            </div>
            <div>
              <button onClick={abrir_info}>
                <AiFillCaretDown className="icono-abrir-info" />
              </button>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <button
            onClick={() => saveAs(post.imagen?.url, `${post.nombre}`+`-FREEBDS`)}
            className="boton-descarga"
          >
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info_item;
