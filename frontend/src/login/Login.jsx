import React from "react"
import "./Login.css"

import { Component } from "react"

class Login extends Component {

render(){
    function ActiveEfect() {
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    }


    return (
    <body>
        <div className="cont">
            <div className="form sign-in">
                <h2>Bem vindo</h2>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" />
                </label>
                <p className="forgot-pass">Esqueceu sua senha?</p>
                <button type="button" className="submit">Entrar</button>
                <button type="button" className="fb-btn">Conectar com <span>facebook</span></button>
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>Novo Aqui?</h2>
                        <p>Entre e tenha controle do seu dia!</p>
                    </div>
                    <div className="img__text m--in">
                        <h2>Ja Faz parte?</h2>
                        <p>Vem ser feliz!</p>
                    </div>
                    <div className="img__btn" onClick={ActiveEfect} >
                        <span className="m--up">Criar</span>
                        <span className="m--in">Logar</span>
                    </div>
                </div>
                <div className="form sign-up">
                    <h2>Ta na Hora de facilitar Seu dia</h2>
                    <label>
                        <span>Nome</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Senha</span>
                        <input type="password" />
                    </label>
                    <button type="button" className="submit">Pronto</button>
                    <button type="button" className="fb-btn">Entrar com <span>facebook</span></button>
                </div>
            </div>
        </div>
    </body>
    );
  }
};

export default Login;