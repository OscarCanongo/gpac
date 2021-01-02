import React from 'react';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Footer';
import Header from '../nuevoTalento/Header';

const NuevoTalento = () => {
    return (  
        <> 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="contenedor-talentos">
                    </div>
                </main>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default NuevoTalento;