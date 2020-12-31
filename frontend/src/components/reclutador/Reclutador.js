import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import SubHeader from '../layout/SubHeader';
import Talentos from './Talentos';
import AuthContext from '../../context/autenticacion/authContext';
import Footer from '../layout/Footer';

const Reclutador = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return (
        <> 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    {
                    <SubHeader />
                    }
                    <div className="contenedor-talentos">
                        <Talentos/>
                    </div>
                </main>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Reclutador;