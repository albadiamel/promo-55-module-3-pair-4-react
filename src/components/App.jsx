import 'react'
import logoReact from '../images/react.svg'
import '../styles/app.css'

const App = () => {
  const [darkMode,setDarkMode] = useState();
  const handleClick = () => {

  }
  console.log(button)
  return (
    <div>
      <button className = "button">Des/activar el dark mode</button>
      <p className = "first-p">Tienes activado el dark mode</p>
      <p className = "second-p"> lorem ipsum</p>
    </div>
  )
}

export default App
