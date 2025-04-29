import React from 'react'
import './Post.css'

function Post({usuario, descricao, link, datahora}){
    return (
        <>
            <div className='caixa'>
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