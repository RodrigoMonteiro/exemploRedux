import React from 'react'
import './App.css'
import Intervalo from './components/Intervalo'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorteio from './components/Sorteio'


function App() {
    return (
        <div className="App">
            <h1>Exercício comunicação com Redux</h1>

            <div className="Container">
                <Intervalo />
            </div>
            <div className="Container">
                <Soma />
                <Media />
                <Sorteio />
            </div>

        </div>
    )
}
export default App