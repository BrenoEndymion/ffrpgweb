import React, {useState} from 'react';
import './styles.css';

import LogoImage from '../../assets/logoffrpg.png';
import { FiLogIn } from 'react-icons/fi';

export default function Login(){
    return (
        <div className="login-container">
            
            <section className="form">
                <img className="imgLogo" src={LogoImage} alt="logo ffrpg" />
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Digite seu email" />
                    <input type="password" placeholder="Digite sua senha" />
                    
                    <button type="submit" className="button" >
                        Entrar
                    </button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Criar conta
                    </a>
                </form>

                
            </section>

        </div>
    );
}