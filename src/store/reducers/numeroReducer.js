const initialState = {
    min: 1,
    max: 10
}

export default  function reducer (state = initialState, action) {

    switch (action.type) {
        case 'ALTERAR_MAXIMO': return { ...state, max: action.payload }
        case 'ALTERAR_MINIMO': return { ...state, min: action.payload }
        default: return state
    }


}