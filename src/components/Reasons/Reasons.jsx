import React from 'react';
import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nick from '../../assets/nike.png';
import tick from '../../assets/tick.png';


export const Reasons = () => {
    return (
        <div className='Reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image3} alt='' />
                <img src={image4} alt='' />
            </div>
            <div className='right-r'>
                <span>algumas razões</span>
                <div>
                    <span className='stroke-text'>por que</span>
                    <span> nos escolher?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>MAIS DE 140+ TREINADORES ESPECIALISTAS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TREINE MAIS RÁPIDO E INTELIGENTE DO QUE ANTES</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 PROGRAMA GRATUITO PARA NOVOS MEMBROS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>PARCEIROS CONFIÁVEIS</span>
                    </div>
                </div>
                <span
                    style={{
                        color: 'var(--gray)',
                        fontWeight: 'normal',
                    }}>
                    NOSSOS PARCEIROS
                </span>
                <div className='parterns'>
                    <img src={nb} alt='' />
                    <img src={adidas} alt='' />
                    <img src={nick} alt='' />
                </div>
            </div>
        </div>
    )
}
