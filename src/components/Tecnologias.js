import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const Tecnologias = () => {
    return (
        <>
        <div className="tecno__container" >
        <Row className="tecno__row p-5" id="tecno"> 
        

        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-html5"></i>HTML5</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-css3"></i>CSS3</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-js"></i>JavaScript</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fas fa-tablet-alt"></i>Responsive web dessing</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-react"></i>React</Col>
        </Row>

        <Row className="tecno__row p-5">
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-git-alt"></i>Git</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-sass"></i>Sass</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fas fa-code"></i>VSCode</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fab fa-wordpress"></i>WordPress</Col>
        <Col className="tecno__col" xs={1} md={2} ><i class="tecno__ico fas fa-cog"></i>RESTful APIs</Col>
        </Row>
        </div>
        </>
    )
}
