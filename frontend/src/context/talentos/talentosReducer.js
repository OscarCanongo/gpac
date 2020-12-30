import { 
    GET_TALENTOS,
    TALENTO_ERROR
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case GET_TALENTOS:
            return {
                ...state,
                talentos: action.payload
            }
        case TALENTO_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}