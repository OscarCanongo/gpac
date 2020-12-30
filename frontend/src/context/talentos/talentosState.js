import React, { useReducer } from 'react';
import talentosContext from './talentosContext';
import talentosReducer from './talentosReducer';
import { 
    GET_TALENTOS,
    TALENTO_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';


const TalentosState = props => {

    const initialState = {
        talentos : [],
        msg: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(talentosReducer, initialState)

    // Obtener los talentos
    const getTalentos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/candidatos');
            console.log(resultado);
            dispatch({
                type: GET_TALENTOS,
                payload: resultado.data.candidatos
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: TALENTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <talentosContext.Provider
            value={{
                talentos: state.talentos,
                msg: state.msg,
                getTalentos
            }}
        >
            {props.children}
        </talentosContext.Provider>
        
    )
}

export default TalentosState;