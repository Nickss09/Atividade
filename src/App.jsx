import { useState } from 'react'
import './App.css'
import Post from './components/Post'

const postagens = [
  {
    usuario: 'Nicolie Müller',
    descricao: 'Sol nasceu, dourando o riso, brinca o dia no improviso. Passa o tempo sem medida, leve, feito flor nascida. Canta o mundo em tom sincero, tudo é belo, tudo é vero.',
    link: 'https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png',
    datahora: '25/04/2025 11:40'
  },
  {
    usuario: 'Isadora Abreu',
    descricao: 'No silêncio da noite serena, Sussurra o vento em voz pequena. A lua observa, calma e cheia, Enquanto o tempo se despeneia.',
    link: 'https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png',
    datahora: '02/05/2025 11:30'
  }
]

const colors=['red','white', 'green', 'yellow']

function App() {
  const [contador, setContador] = useState(0)

//const [variavelParaValor, funçãoMudaValor]
// = useState(Valor)
  return (
    <>
      <div className="header">
        <h1>Blog</h1>
      </div>
      <Post usuario={postagens[0].usuario}
        descricao={postagens[0].descricao}
        link={postagens[0].link}
        datahora={postagens[0].datahora}
        cor='pink'
      />
      <Post usuario={postagens[1].usuario}
        descricao={postagens[1].descricao}
        link={postagens[1].link}
        datahora={postagens[1].datahora}
        cor='green'
      />
      <div>
        <p>Total de posts: {contador}</p>
        <button onClick={()=>setContador(contador+1)}>Aumentar Posts</button>
        <button onClick={()=>setContador(contador-1)}>Diminuir Posts</button>
      </div>
    </>
  )
}
export default App