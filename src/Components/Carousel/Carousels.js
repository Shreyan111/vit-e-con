import React, { useState, useEffect } from 'react';
import "./Carousel.styles.scss";
import sponsor1 from "../../Assets/images/ieee-logo.png"
import sponsor2 from "../../Assets/images/ieeemadras.png"
import sponsor3 from "../../Assets/images/IETELogo.png"
import sponsor4 from "../../Assets/images/Prince-Sultan-University.png"
import sponsor5 from "../../Assets/images/logo-black.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Carousels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const [index, setIndex] = useState(0);

    const slides = [
        {
            url: sponsor1,
            alt: "Image 1",
            text: ""
        },
        {
            url: sponsor2,
            alt: "Image 2",
            text: ""
        },
        {
            url: sponsor3,
            alt: "Image 3",
            text: ""
        },
        {
            url: sponsor4,
            alt: "Image 4",
            text: ""
        },
        {
            url: sponsor5,
            alt: "Image 5",
            text: ""
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index + 1) % slides.length);
            setTranslateValue(translateValue - 500);
            setCurrentIndex(currentIndex + 1);
            if (currentIndex === slides.length - 1 - 2) {
                setTranslateValue(0);
                setCurrentIndex(0);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [index, slides.length]);

    const goToPrevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
        setTranslateValue(translateValue + 500);
    };

    const goToNextSlide = () => {
        if (currentIndex === slides.length - 1 - 2) {
            setCurrentIndex(0);
            setTranslateValue(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            setTranslateValue(translateValue - 500);
        }
    };

    return (
        <div className="carousel">
            <h1 className='heading-secondary'>Our Sponsors</h1>
            <ArrowBackIosIcon onClick={goToPrevSlide} className="previous-button" >Prev</ArrowBackIosIcon>
            <ArrowForwardIosIcon onClick={goToNextSlide} className="next-button">Next</ArrowForwardIosIcon>
            <div
                className="slides"
                style={{ transform: `translateX(${translateValue}px)` }}
            >
                {slides.map((slide, indexes) => (
                    <div
                        key={indexes}
                        className={`slide ${indexes === index ? "active" : ""}`}
                        style={{ width: 500, height: 300, opacity: indexes === index ? 1 : 0.5 }}
                    >
                        <img src={slide.url} alt={slide.alt} />
                        <p>{slide.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}