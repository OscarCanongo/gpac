import React from 'react';
//import NuevoProyecto from '../proyectos/NuevoProyecto';
//import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return ( 
        <aside className = "aside">
            <h1 className = "title">LOGO</h1>

            {//<NuevoProyecto />
            }
            <div className="proyectos">
                <h2>Listado</h2>
                {//<ListadoProyectos />
                }
            </div>
        </aside>
     );
}
 
export default Sidebar;