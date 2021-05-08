import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export const Head = () => {


    const developer =  <i className="fab fa-dev head__ico"key="1"></i>;
    const teacher = <i className="fas fa-chalkboard-teacher head__ico"key="2"></i>;
    const music = <i className="fas fa-music head__ico"key="3"></i>;


    const [ico, setIco] = useState( developer );

    const changeIcon = () => {
        setTimeout(() => {
            if(ico.props.className ==="fab fa-dev head__ico"){
                setIco(teacher)
            }
            else if(ico.props.className ==="fas fa-chalkboard-teacher head__ico"){
                setIco(music)
            }
            else if(ico.props.className ==="fas fa-music head__ico"){
                setIco(developer)
            }
        }, 5000);
            
    }

    useEffect(() => {
            changeIcon() 
    }, );

    return (
        <>
        
            <Row className="head__container p-5 animate__animated animate__fadeIn"
                id="home"
            >
                <Col xs={12} md={9}>
                    <h1 className="head__title ">
                        ¡Hola, bienvenid@! Soy Lorenzo Sancho, desarrollador web, maestro y productor musical.
                    </h1>
                </Col>
                <Col xs={12} md={3}>
                
                <span className="animate__animated animate__fadeIn">{ico}</span>   
                
                </Col>
            </Row>
        </>
    )
}
