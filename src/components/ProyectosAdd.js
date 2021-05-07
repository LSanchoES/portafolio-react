import React from 'react'


const slidesInfo = [

    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto1",
        desc: "Este es el proyecto numero 1",
        url: "https://www.w3schools.com/html/html_images.asp"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto2",
        desc: "Este es el proyecto numero 2"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto3",
        desc: "Este es el proyecto numero 3"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto4",
        desc: "Este es el proyecto numero 4"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto5",
        desc: "Este es el proyecto numero 5"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto6",
        desc: "Este es el proyecto numero 7"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto8",
        desc: "Este es el proyecto numero 8"
    },
    {
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "Proyecto9",
        desc: "Este es el proyecto numero 9"
    },
]

const slides = slidesInfo.map( slide => (
    <div className="proyect__slide-container">
        <a href={slide.url} target="_blank" rel="alternate">
        <img src={slide.src} alt={slide.alt} />
        <div className="proyect__slide-desc">
            <span>{slide.desc}</span>
        </div>
        </a>
    </div>
))

export default slides;