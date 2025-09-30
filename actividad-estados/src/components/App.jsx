import '../styles/app.css'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0) // Estado para el contador
  const [isDarkMode,setIsDarkMode] = useState(true); // Estado para el dark mode
  
  const handleIncrement = () => { // Función manejadora para que incremente el contador (suma 1)
    setCount(count + 1);
  }

  const handleDecrement = () => { // Función manejadora para que reduzca el contador (resta 1 solo si es mayor que 0)
    if (count > 0) {
      setCount(count -1);
    }
  }

  const handleReset = () => { // Función manejadora para reiniciar el contador a 0
    setCount(0);
  }

  const handleSwitchMode = () => { // Función manejadora para cambiar entre modo light y dark
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button onClick={handleSwitchMode}>{isDarkMode ? "Activar light mode" : "Activar dark mode"}</button>
      <p>Contador {count}</p>
      <button onClick={handleDecrement}>Reducir contador</button>
      <button onClick={handleIncrement}>Incrementar contador</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
