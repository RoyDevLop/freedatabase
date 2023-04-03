import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Info from './categorias/Info'
import Cabecera from './components/Cabecera'
import Inicio from './categorias/Inicio'
import Ventas from './categorias/Ventas'
import Category from './components/Category'
import {PostProvider} from './context/Postcontext'
import {Newpost} from './categorias/Publicar'
import { Toaster } from 'react-hot-toast'
import Register from './user/Register'
import Login from './user/Login'
import Lugares from './categorias/Lugares'
import Empresas from './categorias/Empresas'
import Paginas_web from './categorias/Paginas_web'
import ReqResetPwd from './user/ReqResetPwd'
import Reset_pwd from './user/Reset_pwd'
import SendCode from './user/SendCode'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <PostProvider>
        <Router>
            <Routes>
                <Route path='/' exact element={<>
                        <Cabecera/>
                        <Inicio/>
                        <Category/>               
                    </>
                }/>
                <Route path='/:items/:id' element={<>   
                        <Info/>
                    </>
                }/>  
                <Route path='/categoria-ventas' element={<>          
                        <Cabecera/>
                        <Ventas/>
                        <Category/>            
                    </>
                }/>
                <Route path='/categoria-lugares' element={<>          
                        <Cabecera/>
                        <Lugares/>
                        <Category/>            
                    </>
                }/>
                <Route path='/categoria-empresas' element={<>          
                        <Cabecera/>
                        <Empresas/>
                        <Category/>            
                    </>
                }/>
                <Route path='/categoria-paginasweb' element={<>          
                        <Cabecera/>
                        <Paginas_web/>
                        <Category/>            
                    </>
                }/>
                
                <Route path='/new' element={<>             
                    <Newpost/>
                </>}/>
                <Route path='/registrar' element={<>             
                    <Register/>
                </>}/>
                <Route path='/logear' element={<>             
                    <Login/>
                </>}/>
                <Route path='/forgot-password' element={
                <>
                    <ReqResetPwd/>
                    <SendCode/>
                    <Reset_pwd/>
                    </>
                }/>
           
            </Routes>
            <Toaster/>
            
        </Router>
    </PostProvider>    
  
)
