import React, { useState, useEffect } from 'react';
import './Speaker-Lottie-styles.scss'
import kin from '../../Assets/images/kin.jpg'
import pascal from '../../Assets/images/pascal.png'
import celia from '../../Assets/images/celia.png'
import joy from '../../Assets/images/Joy-Iong-Zong-Chen.png'
import ganesh from '../../Assets/images/ganesh.png'
import bala from '../../Assets/images/balaji.png'
import johan from '../../Assets/images/johan.png'
import endar from '../../Assets/images/endar.png'
import liji from '../../Assets/images/liji.png'
import suyab from "../../Assets/images/Suayb-Arslan.jpg"
import alvaro from "../../Assets/images/alvaro.jpeg"
import mohd from "../../Assets/images/mohd.jpeg"
// import Lottie from 'react-lottie';
// import animationData from './lottie.json';

const SpeakerLottie = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    // <div className='speakers'>
    //     {/* <div className='content'>
    //         <h1 className='heading-secondary'>Keynote Speakers Across the Globe</h1>
    //     </div> */}
    //     {/* <div className='main-lottie'>
    //         <Lottie options={defaultOptions}/>
    //     </div> */}
    //     {/* <div className='coming-soon'>
    //         <h1>COMING SOON!!</h1>
    //     </div> */}
    // </div>
    const speakers = [
        {
            name: 'Dr. Kin K. Leung',
            image: kin,
            info: 'Imperial College, United Kingdom'
        },
        {
            name: 'Dr. Pascal Lorenz',
            image: pascal,
            info: 'University of Haute Alsace, France'
        },
        {
            name: 'Dr. Celia Shahnaz',
            image: celia,
            info: 'BUET, Bangladesh'
        },
        {
            name: 'Dr. Joy Iong-Zong Chen',
            image: joy,
            info: 'Da-Yeh University, Taiwan'
        },
        {
            name: 'Dr. Ganesh Neelakanta Iyer',
            image: ganesh,
            info: 'NUS, Singapore'
        },
        {
            name: 'Dr. Alvaro Fuentes',
            image: alvaro,
            info: 'Jeonbuk National University, South Korea'
        },
        {
            name: 'Dr. Balaji Palanisamy',
            image: bala,
            info: 'Univerity of Pittsburgh, USA'
        },
        {
            name: 'Dr. Mohd Fareq Abd Malek',
            image: mohd,
            info: 'University of Wollongong in Dubai, UAE'
        },
        {
            name: 'Dr. Suayb S. Arslan',
            image: suyab,
            info: 'Massachusetts Institute of Technology, Cambridge, MA, USA'
        },
        {
            name: 'Dr. Johan Siden',
            image: johan,
            info: 'Mid Sweden University, Sundsvall, Sweden'
        },
        {
            name: 'Dr. Ender Ayanoglu',
            image: endar,
            info: 'University of California, Irvine, CA, USA'
        },
        {
            name: 'Dr. Ljiljana Trajkovic',
            image: liji,
            info: 'Simon Fraser University, Canada'
        },
    ];

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offsetTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const totalHeight = document.documentElement.offsetHeight;

            if (offsetTop > (totalHeight - windowHeight) / 30) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return (
        <div className='speakers-top'>
            <div className='content'>
                <h1 className='heading-secondary'>Keynote Speakers Across the Globe</h1>
            </div>
            <div className="speakers">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className={`speaker-card ${visible ? 'visible' : ''}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="speaker-image">
                            <img src={speaker.image} alt={speaker.name} />
                        </div>
                        <div className="speaker-info">
                            <h2>{speaker.name}</h2>
                            <p>{speaker.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpeakerLottie