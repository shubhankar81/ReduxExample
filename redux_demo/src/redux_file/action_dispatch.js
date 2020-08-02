import { REGISTER_USER, SUBMIT_USER  } from './action_type';
import * as uuid from 'uuid';

export const setUser = (value, type) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type : REGISTER_USER,
        payload : { value, type }
    })

}