//action creator
export function alterarNumeroMinimo(novoNumero){
    return{
        type: 'ALTERAR_MINIMO',
        payload: novoNumero
    }
}
export function alterarNumeroMaximo(novoNumero){
    return{
        type: 'ALTERAR_MAXIMO',
        payload: novoNumero
    }
}