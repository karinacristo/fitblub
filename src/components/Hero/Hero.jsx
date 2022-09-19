import React from 'react';
import './Hero.css';
import { Header } from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from "framer-motion";


export const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <div className='hero'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header />
                {/* a melhor academia */}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        animate={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>a melhor academia de toda a cidade</span>
                </div>
                {/* cabeçalho */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Molde </span>
                        <span>Seu</span>
                    </div>
                    <div>
                        <span>Corpo Ideal</span>
                    </div>
                    <div>
                        <span>
                            Aqui vamos ajudá-lo a moldar e construir seu
                            corpo ideal e viver sua vida ao máximo
                        </span>
                    </div>
                </div>

                {/* figuras */}
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>treinadores especialistas</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>alunos se juntaram</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>programas fitness</span>
                    </div>
                </div>
                {/* buttons */}
                <div className='hero-buttons'>
                    <buttons className='btn'>Começar</buttons>
                    <buttons className='btn'>Leia Mais</buttons>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Entrar Agora</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    animate={{ right: '4rem' }}
                    transition={{ ...transition, type: 'tween' }}
                    className='heart-rate'>
                    <img src={Heart} alt='coração' />
                    <span>Frequência Cardíaca</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* images */}
                <img src={hero_image} alt='' className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    animate={{ right: '20rem' }}
                    transition={{ ...transition, type: 'tween' }}
                    src={hero_image_back} alt='' className='hero-image-back' />
                {/* calories */}
                <motion.div
                    initial={{ right: '37rem' }}
                    animate={{ right: '28rem' }}
                    transition={{ ...transition, type: 'tween' }}
                    className='calories'>
                    <img src={Calories} alt='' />
                    <div>
                        <span>Calorias Queimadas</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

