import './App.css'
import Post from './components/Post'

function App() {

  return (
    <>
    <div className="header">
      <h1>Blog</h1>
    </div>
      <Post 
        usuario='Nicolie Müller'
        descricao='"Sol nasceu, dourando o riso,
                    brinca o dia no improviso.
                    Passa o tempo sem medida,
                    leve, feito flor nascida.
                    Canta o mundo em tom sincero,
                    tudo é belo, tudo é vero."'
        link='https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png'
        datahora='25/04/2025 11:40'
      />
    </>
  )
}
export default App