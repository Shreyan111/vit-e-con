import React, { useState, useEffect } from 'react';
import './Speaker-Lottie-styles.scss'
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
    const speakers = [
        {
            name: 'Dr. Kin K. Leung',
            image: 'https://via.placeholder.com/150',
            info: 'Imperial College, United Kingdom'
        },
        {
            name: 'Dr. Pascal Lorenz',
            image: 'https://via.placeholder.com/150',
            info: 'University of Haute Alsace, France'
        },
        {
            name: 'Dr. Celia Shahnaz',
            image: 'https://via.placeholder.com/150',
            info: 'BUET, Bangladesh'
        },
        {
            name: 'Dr. Joy Iong-Zong Chen',
            image: 'https://via.placeholder.com/150',
            info: 'Da-Yeh University, Taiwan'
        },
        {
            name: 'Dr. Ganesh Neelakanta Iyer',
            image: 'https://via.placeholder.com/150',
            info: 'NUS, Singapore'
        },
        {
            name: 'Dr. Alvaro Fuentes',
            image: 'https://via.placeholder.com/150',
            info: 'Jeonbuk National University, South Korea'
        },
        {
            name: 'Dr. Balaji Palanisamy',
            image: 'https://via.placeholder.com/150',
            info: 'Univerity of Pittsburgh, USA'
        },
        {
            name: 'Dr. Mohd Fareq Abd Malek',
            image: 'https://via.placeholder.com/150',
            info: 'University of Wollongong in Dubai, UAE'
        },
        {
            name: 'Dr. Suayb S. Arslan',
            image: 'https://via.placeholder.com/150',
            info: 'Massachusetts Institute of Technology, Cambridge, MA, USA'
        },
        {
            name: 'Dr. Johan Siden',
            image: 'https://via.placeholder.com/150',
            info: 'Mid Sweden University, Sundsvall, Sweden'
        },
        {
            name: 'Dr. Ender Ayanoglu',
            image: 'https://via.placeholder.com/150',
            info: 'University of California, Irvine, CA, USA'
        },
        {
            name: 'Dr. Ljiljana Trajkovic',
            image: 'https://via.placeholder.com/150',
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
    )
}

export default SpeakerLottie