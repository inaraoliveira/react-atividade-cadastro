import React from "react";
import logo from './logo.svg'
import './Cadastro.css'

export default function Cadastro(){
    const mensagem = () => {
        alert('Ocorreu um erro, tente novamente mais tarde.')
    }

    return(
        <div className='container'>
            <div className='contForm'>
                <div className='contCadastro'>
                    <h2>Cadastro</h2>
                    <p>Preencha os dados abaixo para começar.</p>
                </div>
                <form className='formulario'>
                    <input type="text" name='nome' placeholder='Nome' id='nome'/>
                    <input type="text" name='sobrenome' placeholder='Sobrenome' id='sobrenome'/>
                    <input type="text" name='email' placeholder='Email' id='email'/>
                    <input type="password" name='senha' placeholder='Senha' id='senha'/>

                    <button id='botao' onClick={() => mensagem()}>Concluir Cadastro</button>
                </form>
            </div>
            <div className='contLogo'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>App React</h1>
            </div>
        </div>
    );
}