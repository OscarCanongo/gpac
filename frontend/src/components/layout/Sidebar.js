import React from 'react';
import logo from '../../images/gpac1.png';

const Sidebar = () => {

    return ( 
        <aside className = "aside">
            <img class="centrado" src={logo} />

            <div className="candidatos">
                <ul className="listado-candidatos">
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Dashboard</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p>Job orders</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Companies</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> S.Projects</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Map</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Task Toll</p></button>
                <button
                    type="button"
                    className="btn-aside btn-block" 
                    //onClick={ () => seleccionar(task.id) }
                > <p> Sendouts</p></button>
                </ul>
            </div>
        </aside>
     );
}
 
export default Sidebar;