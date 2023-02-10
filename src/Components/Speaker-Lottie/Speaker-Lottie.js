import React from 'react';
import './Speaker-Lottie-styles.scss'
import Lottie from 'react-lottie';
import animationData from './lottie.json';

const SpeakerLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='speakers'>
            <div className='content'>
                <h1 className='heading-secondary'>Speaker Details</h1>
            </div>
            <div className='main-lottie'>
                <Lottie options={defaultOptions}/>
            </div>
            <div className='coming-soon'>
                <h1>COMING SOON!!</h1>
            </div>
        </div>
    )
}

export default SpeakerLottie