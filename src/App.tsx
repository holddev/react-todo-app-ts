import './App.scss'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Todos } from './components/Todos.tsx'


function App() {

  return (
    <div className="Wrapper">
      <section className="View">
        <h1 className='View-h1'>Todo App with
          <img className='View-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' />
        </h1>
        <div className="View-layout">
          <Header />
          <Todos />
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
