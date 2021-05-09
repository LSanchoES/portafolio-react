import React from 'react'


const slidesInfo = [

    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/vzpvoem5esh39zghgtv5.png",
        alt: "Crypto Currency App",
        desc: "Accede al valor de todas las crypto a tiempo real",
        url: "https://lsanchoes.github.io/crypto-currency-app/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/cgrwrjoglglzvdhlife8.png",
        alt: "Maquetacion3",
        desc: "Maquetación de una web desde PSD, cambiador de temas",
        url: "https://lsanchoes.github.io/Maquetacion3/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/lbwackbpgml0doatbndq.png",
        alt: "F2P Finder",
        desc: "Busca cualquier juego gratuito del mercado",
        url: "https://lsanchoes.github.io/F2P-Finder"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/nkheq0chbwrcay06izhe.png",
        alt: "Black Jack App",
        desc: "Juega una partidita de blackjack",
        url: "https://lsanchoes.github.io/blackjack-app/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/niull5nlgcwtzpe1zju1.png",
        alt: "Random User App",
        desc: "Buscador de usuarios en API",
        url: "https://lsanchoes.github.io/RandomUserApp/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/b21ihczyfxz9n5ykcubx.png",
        alt: "Journal App",
        desc: "Registrate y accede a este diario personal",
        url:"https://lsanchoes.github.io/journal-app"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/hviy4kkczggmyloolpxx.png",
        alt: "Calculadora",
        desc: "La típica calculadora",
        url: "https://lsanchoes.github.io/calculadora-js/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/ewrihset4clw8iz7j6fw.png",
        alt: "Maquetacion1",
        desc: "Maquetación de una web desde PSD, un ejemplo básico",
        url: "https://lsanchoes.github.io/Maquetacion1/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/cl4hbjvjyy9oi3jxpi1o.png",
        alt: "Todo App",
        desc: "Una lista de tareas pendiente, pruebala",
        url: "https://lsanchoes.github.io/Lista-ToDos/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/bzaovtte2lm3f7pe71b9.png",
        alt: "GenshinBuilds",
        desc: "Builds para el juego Genshin Impact",
        url: "https://genshinbuilds.es/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491555/tx0dlllazh0xsi7pes12.png",
        alt: "Heroes App",
        desc: "Busca cualquier heroe de Marvel y DC",
        url: "https://lsanchoes.github.io/marvel"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/ckw4iyw3vw8ocr60tx9g.png",
        alt: "Piedra-Papel-Tijera",
        desc: "El clasico piedra papel o tijera, confeccionado con amor",
        url: "https://lsanchoes.github.io/piedra-papel-tijera-js/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/y0bgogu0u2b8sac9zfrx.png",
        alt: "Maquetacion2",
        desc: "Maquetación de una web desde PSD con HTML y CSS",
        url: "https://lsanchoes.github.io/Maquetacion2/"
    },
    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/jk4q6gxjdymd2ppf6ywz.png",
        alt: "GIF expert app",
        desc: "Busca cualquier gif en esta app",
        url: "https://lsanchoes.github.io/GifExpertApp/"
    },

    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491559/mxskvxke1jb7uulxxfdp.png",
        alt: "Beer App",
        desc: "Tomate una cervecita aleatoria y de paso mira como se fabrica",
        url: "https://lsanchoes.github.io/beer-app/",
    },

    {
        src: "https://res.cloudinary.com/lsancho-es/image/upload/v1620491556/cbwly7woad78d0efhf97.png",
        alt: "Breaking bad App",
        desc: "Busca cualquier personaje de esta fantástica serie",
        url: "https://lsanchoes.github.io/breaking-bad-app/",
    },
    // {
    //     src: "",
    //     alt: "",
    //     desc: "",
    //     url: ""
    // },
]

const slides = slidesInfo.map( slide => (
    <div className="proyect__slide-container">
        <a href={slide.url} target="_blank" rel="noreferrer">
        <img src={slide.src} alt={slide.alt} />
        <div className="proyect__slide-desc">
            <span>{slide.desc}</span>
        </div>
        </a>
    </div>
))

export default slides;