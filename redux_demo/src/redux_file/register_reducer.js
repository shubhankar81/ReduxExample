import { REGISTER_USER, SUBMIT_USER } from './action_type';

const initialState = [];


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case 'REGISTER_USER' :
                console.log(type, payload, state)
                let c = 0 ;
                state.map(a=> {
                        if(a.type == payload.type){
                                c=1
                                a.value = payload.value
                        }
                })
                if(!c){
                        state.push(payload)
                }
                return state;
        case 'SUBMIT_USER' :
                return state.filter(_a => _a.id != payload)
        
        default : 
                return state;

    }
}