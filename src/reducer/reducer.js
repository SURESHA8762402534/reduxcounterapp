const reducer = (state, action) => {
    if(state === undefined){
        return {
            count : 0
        }
    }

    switch(action.type){
        case "INCREMENT" :
            state.count = state.count + 1
            break;
            case "DECREASE":
                state.count = state.count - 1
                // console.log('clicked');
                break;
            default:
                break;
        }
        return {...state}
}

export default reducer; 