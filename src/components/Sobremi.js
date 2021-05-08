import React from 'react'
import { Row , Col} from 'react-bootstrap'

export const Sobremi = () => {
    return (
        
        <div className="sobre__container" id="sobremi">
            <Row>
                <Col xs={12} md={5} className="sobre__image-col">
                    <img 
                    alt="Lorenzo Sancho"
                    className="sobre__imagen"
                    src="https://res.cloudinary.com/lsancho-es/image/upload/v1620311301/nddzhijozpbchk6zuici.png" 
                    />
                    <div>
                       <a href="https://www.linkedin.com/in/lsanchoaragon/"  target="_blank" rel="noreferrer">  <i className="sobre__ico fab fa-linkedin"></i>  </a>
                       <a href="https://github.com/LSanchoES"  target="_blank" rel="noreferrer">                <i class="sobre__ico fab fa-github-square"></i> </a>
                       <a href="https://www.instagram.com/vristok/"  target="_blank" rel="noreferrer">          <i className="sobre__ico fab fa-instagram-square"></i> </a>
                    </div>
                </Col> 
                <Col xs={12} md={7}>
                    <div className="sobre__texto">
    
                    <p><em>Era sé una vez un hombre pegado a un ordenador...</em> desde muy pequeño 
                        me ha encantado el mundo de la informática; cuando no existía Windows
                        yo ya jugaba a Prince of Persia ejecutando desde MS-DOS los míticos floppy disk.
                        <hr/>
                        Mi trayectoria ha sido muy diversa ya que me gusta estar en constante aprendizaje,
                        en mi adolescencia descubrí el mundo de la música y comencé a trastear con diferentes 
                        instrumentos analógicos y virtuales, adentrandome así en el mundo del MIDI.
                        <hr/>

                        Entré a la <b>Universidad Complutense de Madrid</b> para hacer la carrera de magisterio musical 
                        y así tener una base sólidad tanto musical como pedagógica. Tras terminar la carrera mientras doy
                        clases particulares de música, estudio por mi cuenta y en varios cursos, las diferentes tecnologías 
                        referentes a la informática y a la producción de audio.
                        <hr/>

                        Después de haber trabajado como <i>soporte técnico y webmaster</i> me decidí por aprender más a fondo
                        sobre programación y actualmente sigo estudiando y aprendiendo en este vertiginoso mundo de la tecnología digital.
                        <hr/>
                        <i><b>Estas son las tecnologías que controlo  </b></i> 🙂


                    </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
