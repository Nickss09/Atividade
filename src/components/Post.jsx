import React from 'react'
import './Post.css'

const Post = ({ usuario, descricao, link, datahora, cor}) => {
  return (
    <>
      <div className='caixa' style={{background:cor}}>
        <div className='perfil'>
          <img src={link} className="foto" />
          <h2 className='nome'>{usuario}</h2>
        </div>
        <p className='descricao'>{descricao}</p>
        <div className='data-hora'>{datahora}</div>
      </div>
    </>
  )
}
export default Post