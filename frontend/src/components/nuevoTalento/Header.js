import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { useHistory } from 'react-router-dom';

const Header = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { cerrarSesion  } = authContext;

    const history = useHistory();

    return ( 
        <header className="app-header">
            
            <nav className="nav-principal">
            <div className="header-form">
                <input
                    type="submit" 
                    className="btn-back btn-block" 
                    value="BACK" 
                />
            </div>
            </nav>
        </header>
     );
}
 
export default Header;