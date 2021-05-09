import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Audiovisual = () => {
    return (
        
        <Row className="audiovisual__container" id="audiovisual">
            <Col xs={12} lg={4} className="audiovisual__col">
                <h2>Música</h2>
                <p>
                    Más de 15 años de experiencia como músico y profesor de guitarra, bajo, piano y armonía y más de 5 como productor de audio, titulado en SAE institute Madrid y Ableton Certificated.
                </p>
                <div>
               <a href="https://soundcloud.com/vristok" target="_blank" rel="noreferrer">  <i className="fab fa-soundcloud audiovisual__ico"></i></a>
               <a href="https://open.spotify.com/artist/7GnrjdMqD8VJxK1CMOgh7L?si=XztLl4RdS3mkXhFegRe8hQ" target="_blank" rel="noreferrer">  <i className="fab fa-spotify audiovisual__ico"></i></a>
               <a href="https://www.youtube.com/channel/UCG3WiwpnAoIJ9Zr7vrcvjGQ/videos" target="_blank" rel="noreferrer">  <i className="fab fa-youtube-square audiovisual__ico"></i></a>
               </div>
            </Col>
            <Col xs={12} lg={4} className="audiovisual__col">
                <h2>Directos</h2>
                <p>Broadcaster profesional durante los últimos años, consiguiendo más de 5000 followers en la plataforma móvil Live.me y 11.000 en Nimo.TV, además hago directos por diversión en Twitch donde tengo más de 7.000 followers.</p>
                <a href="https://www.twitch.tv/vristok" target="_blank" rel="noreferrer"><i className="fab fa-twitch audiovisual__ico"></i></a>
            </Col>
            <Col xs={12} lg={4} className="audiovisual__col">
                <h2>Video</h2>
                <p>Aunque me encanta la edicción de video, no es algo en lo que haya hecho mucho hincapié pero aún así he conseguido crecer un poquito en Youtube, si te gusta el mundo gaming no dudes en suscribirte</p>
                <a href="https://www.youtube.com/channel/UC-ysJS9-nifzJRx6jAgZENA" target="_blank" rel="noreferrer"><i className="fab fa-youtube audiovisual__ico"></i></a>
            </Col>
            
        </Row>
    )
}
