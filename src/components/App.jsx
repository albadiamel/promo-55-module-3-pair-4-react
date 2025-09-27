import 'react'
import logoReact from '../images/react.svg'
import '../styles/app.css'

const App = () => {
  console.log(logoReact)
  return (
    <div>
      <p className="title">Hola, este es mi primer párrafo</p>
      <img src={logoReact} alt="React logo" className="logo" />
    </div>
  )
}

export default App
